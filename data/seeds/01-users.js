exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'tater', password: '$2a$08$x3iUFHOrHA1fddHdbRa2BuUHNklu3nK4XA5kBJP2hHMc9VkH5T4EO' },
        { id: 2, username: 'tots', password: '$2a$08$BOZq8rAiFK2WloKUYiF6Mu6X4d6bo8X2YShvEpRYZ/PreQSEEi7/W' },
      ])
    })
}