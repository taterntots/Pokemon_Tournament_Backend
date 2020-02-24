exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('pokemon').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemon').insert([
        { id: 1, name: 'bulbasaur', type1_id: 4 },
        { id: 2, name: 'charmander', type1_id: 2 },
        { id: 3, name: 'squirtle', type1_id: 3 },
        { id: 4, name: 'pikachu', type1_id: 5 },
        { id: 5, name: 'eevee', type1_id: 1 },
        { id: 6, name: 'marshadow', type1_id: 7 }
      ])
    })
}