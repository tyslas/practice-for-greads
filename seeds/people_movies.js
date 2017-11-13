
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people_movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('people_movies').insert([
        {id: 1, people_id: '1', movies_id: '1'},
        {id: 2, people_id: '2', movies_id: '1'},
        {id: 3, people_id: '3', movies_id: '1'},
        {id: 4, people_id: '4', movies_id: '1'},
        {id: 5, people_id: '5', movies_id: '2'},
        {id: 6, people_id: '6', movies_id: '2'},
        {id: 7, people_id: '7', movies_id: '2'},
        {id: 8, people_id: '8', movies_id: '2'},
        {id: 9, people_id: '9', movies_id: '3'},
        {id: 10, people_id: '10', movies_id: '3'},
        {id: 11, people_id: '11', movies_id: '3'},
        {id: 12, people_id: '12', movies_id: '3'},
        {id: 13, people_id: '13', movies_id: '3'},
        {id: 14, people_id: '14', movies_id: '3'}
      ]);
    });
};
