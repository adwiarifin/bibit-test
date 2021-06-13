require('dotenv').config();
require('express-group-routes');

const express = require('express');
const knex = require('knex');
const routes = require('./routes');

process.on('uncaughtException', (e) => {
    console.error(e);
    process.exit(0);
});

// DATABASE //
const db = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    }
});
// DATABASE //

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

module.exports = app;