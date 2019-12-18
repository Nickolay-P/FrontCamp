const express = require('express');
const next = require('next');
const routes = require('./routes');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare()
    .then(() => {
        console.info('> Listening on http://localhost:8080');
        express()
            .use(handler)
            .listen(8080);
    })

    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
