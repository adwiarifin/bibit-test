const health = require('./health');
const api = require('./api');

module.exports = (app) => {
    app.group('/', health);
    app.group('/api', api);
}