const routes = require('next-routes');

module.exports = routes()
    .add('start', '/', 'results')
    .add('film', '/film/:id', 'film')
    .add('filmDefault', '/film', 'results')
    .add('search', '/search/:searchString', 'results')
    .add('searchDefault', '/search', 'results')
    .add('error', '/:something', 'error');
