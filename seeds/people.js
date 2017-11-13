
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {id: 1, name: 'Jonah Hill', role: 'actor'},
        {id: 2, name: 'Michael Cera', role: 'actor'},
        {id: 3, name: 'Christopher Mintz-Plasse (McLovin)', role: 'actor'},
        {id: 4, name: 'Greg Mattola', role: 'director'},
        {id: 5, name: 'Seth Rogen', role: 'actor'},
        {id: 6, name: 'James Franco', role: 'actor'},
        {id: 7, name: 'Danny McBride', role: 'actor'},
        {id: 8, name: 'David Gordon Green', role: 'director'},
        {id: 9, name: 'Steve Carell', role: 'actor'},
        {id: 10, name: 'Catherine Keener', role: 'actor'},
        {id: 11, name: 'Paul Rudd', role: 'actor'},
        {id: 12, name: 'Romany Malco', role: 'actor'},
        {id: 13, name: 'Seth Rogen', role: 'actor'},
        {id: 14, name: 'Judd Apatow', role: 'director'}
      ]);
    });
};
