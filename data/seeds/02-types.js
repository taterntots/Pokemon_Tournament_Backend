exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        { id: 1, name: 'normal' },
        { id: 2, name: 'fire' },
        { id: 3, name: 'water' },
        { id: 4, name: 'grass' },
        { id: 5, name: 'electric' },
        { id: 6, name: 'ice' },
        { id: 7, name: 'fighting' },
        { id: 8, name: 'poison' },
        { id: 9, name: 'ground' },
        { id: 10, name: 'flying' },
        { id: 11, name: 'psychic' },
        { id: 12, name: 'bug' },
        { id: 13, name: 'rock' },
        { id: 14, name: 'ghost' },
        { id: 15, name: 'dark' },
        { id: 16, name: 'dragon' },
        { id: 17, name: 'steel' },
        { id: 18, name: 'fairy' }
      ])
    })
}