const express = require('express');
const body_parser = require('body-parser');
const server = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('./model-user');

//  DB
mongoose.connect('mongodb://localhost/news', { useNewUrlParser: true });
mongoose.connection.on('error', console.error.bind(console, 'Try your best again:'));
let newsSchema = new mongoose.Schema({
  name: String,
  genre: String,
  id: String
});

let News = mongoose.model('News', newsSchema);

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
server.use(passport.initialize());
server.use(passport.session());

server.post('/api/register', function (req, res) {
  let password = req.body.password;
  let password2 = req.body.password2;

  if (password == password2) {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });

    User.createUser(newUser, function (err, user) {
      if (err) throw err;
      res.send(user).end()
    });
  } else {
    res.status(500).send("{errors: \"Passwords don't match\"}").end()
  }
});

const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function (username, password, done) {
    User.getUserByUsername(username, function (err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: 'Unknown User' });
      }
      User.comparePassword(password, user.password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Invalid password' });
        }
      });
    });
  }
));

// const FacebookStrategy = require('passport-facebook').Strategy;
// passport.use(new FacebookStrategy({
//   clientID: process.env.FB_APP_ID,
//   clientSecret: process.env.FB_APP_SECRET,
//   callbackURL: "http://localhost:4000/auth/facebook/callback"
// },
//   function (accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.getUserById(id, function (err, user) {
    done(err, user);
  });
});

const authenticate = passport.authenticate('local');
const isAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.sendStatus(401);
  }
  next();
};

server.post('/api/login',
  authenticate,
  function (req, res) {
    res.json(req.user);
  }
);

server.get('/api/user', isAuth, function (req, res) {
  res.send(req.user);
});

server.get('/api/logout', isAuth, function (req, res) {
  req.logout();
  res.send(null)
});

// server.get('/auth/facebook', passport.authenticate('facebook'), (req, res) => {
//   res.json(req);
// });

// server.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { failureRedirect: '/login' }),
//   function (req, res) {
//     res.redirect('/');
//   });

server.listen(4000, () => {
  console.log(`IT WORKS!11!1!!!  (4000)`);
});

server.use(body_parser.json());
server.get("/api/news", (req, res) => {
  News.find({}, function (err, news) {
    if (!err) res.json(news)

  });
});

server.get("/api/news/:id", (req, res) => {
  const newsId = req.params.id;
  News.findOne({ id: newsId }, function (err, news) {

    if (!err) res.send(news);

  });
});

server.post("/api/news", isAuth, (req, res) => {
  const newsName = req.body.name;
  const newsGenre = req.body.genre;
  const newsId = req.body.id;
  const user = new News({ name: newsName, genre: newsGenre, id: newsId });

  user.save(function (err) {
    if (!err) res.sendStatus(201);
  });

});

server.put("/api/news", isAuth, (req, res) => {
  if (!req.body) return res.sendStatus(400);

  News.findOneAndUpdate({ id: 'tt0110357' }, { $set: { name: req.body.name, genre: req.body.genre } },
    { new: true }, function (err) {
      if (!err) res.sendStatus(200);
    });
});

server.delete("/api/news/:id", (req, res) => {
  const newsId = req.params.id;
  News.findOneAndDelete({ id: newsId }, function (err) {
    if (!err) res.sendStatus(200);
  });
});

server.use((err, req, res, next) => {
  res.status(500).send('Error!')
});