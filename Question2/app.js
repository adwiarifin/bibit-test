require('express-group-routes');

const express = require('express');
const routes = require('./routes');

process.on('uncaughtException', (e) => {
    console.error(e);
    process.exit(0);
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

module.exports = app;