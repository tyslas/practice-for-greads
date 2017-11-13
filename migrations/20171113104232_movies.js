
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('movies', (table) => {
      table.increments();
      table.string('title');
      table.integer('director_id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('movies')
  ])
};
