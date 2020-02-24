exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        { id: 1, team_name: 'Bulba Butts', pokemon1_dex: 'bulbasaur', pokemon2_dex: 'eevee', pokemon3_dex: 'charmander', pokemon4_dex: 'pikachu', pokemon5_dex: 'squirtle', pokemon6_dex: 'bulbasaur', user_id: 1 },
        { id: 2, team_name: 'Eeveenites', pokemon1_dex: 'eevee', pokemon2_dex: 'eevee', pokemon3_dex: 'eevee', pokemon4_dex: 'eevee', pokemon5_dex: 'eevee', pokemon6_dex: 'eevee', user_id: 1 },
        { id: 3, team_name: 'Squirtle Squad', pokemon1_dex: 'squirtle', pokemon2_dex: 'squirtle', pokemon3_dex: 'squirtle', pokemon4_dex: 'squirtle', pokemon5_dex: 'squirtle', pokemon6_dex: 'squirtle', user_id: 2 }
      ])
    })
}