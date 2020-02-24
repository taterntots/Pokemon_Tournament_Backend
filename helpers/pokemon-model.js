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
  return db('pokemon as p')
    .select(
      'p.id as dexNum',
      'p.name',
      't.name as type1'
    )
    .join('types as t', 't.id', 'p.type1_id');
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