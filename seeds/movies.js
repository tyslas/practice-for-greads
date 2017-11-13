
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'Superbad', director_id: 4},
        {id: 2, title: 'Pineapple Express', director_id: 8},
        {id: 3, title: 'The 40-Year-Old Virgin', director_id: 13}
      ]);
    });
};
