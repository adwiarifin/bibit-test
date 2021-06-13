const express = require('express');

process.on('uncaughtException', (e) => {
    console.error(e);
    process.exit(0);
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    })
});

module.exports = app;