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
  return db('pokemon');
}

function findBy(filter) {
  return db('pokemon')
    .where(filter);
}

function findById(id) {
  return db('pokemon')
    .where({ id })
    .first();
}

function add(plant) {
  return db('pokemon')
    .insert(plant, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function update(id, changes) {
  return db('pokemon')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("pokemon")
      .where("id", id)
      .del();
}