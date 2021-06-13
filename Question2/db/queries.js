const knex = require('./knex');

module.exports = {
    list(table) {
        return knex(table);
    },
    insert(table, data) {
        return knex(table).insert(data);
    }
}