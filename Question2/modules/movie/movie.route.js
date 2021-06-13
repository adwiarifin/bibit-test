const movieController = require('./movie.controller');

module.exports = (app) => {
    app.group('/movie', (route) => {
        route.get('/search/:query', movieController.search);
        route.get('/detail/:id', movieController.detail);
    });
}