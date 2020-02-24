const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findBy,
  findById,
  add,
  update,
  remove
}

function find() {
  return db('users');
}

function findBy(filter) {
  return db('users')
    .where(filter);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function add(plant) {
  return db('users')
    .insert(plant, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("users")
      .where("id", id)
      .del();
}