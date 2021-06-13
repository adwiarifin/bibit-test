
exports.up = function (knex) {
    return knex.schema.createTable('log_api', (table) => {
        table.increments();
        table.string('method');
        table.string('url');
        table.text('body');
        table.text('response');
        table.timestamps();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('log_api');
};
