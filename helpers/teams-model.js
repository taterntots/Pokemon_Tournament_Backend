const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findBy,
  findById,
  findTeamsByUser,
  add,
  update,
  remove
}

function find() {
  return db('teams');
}

function findBy(filter) {
  return db('teams')
    .where(filter);
}

function findById(id) {
  return db('teams')
    .where({ id })
    .first();
}


function findTeamsByUser(userId) {
  return db('users')
    .join('teams', 'users.id', 'teams.user_id')
    .select('teams.id', 'teams.team_name', 'teams.pokemon1_dex', 'teams.pokemon2_dex', 'teams.pokemon3_dex', 'teams.pokemon4_dex', 'teams.pokemon5_dex', 'teams.pokemon6_dex')
    .where('users.id', userId);
}

function add(plant) {
  return db('teams')
    .insert(plant, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function update(id, changes) {
  return db('teams')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("teams")
    .where("id", id)
    .del();
}