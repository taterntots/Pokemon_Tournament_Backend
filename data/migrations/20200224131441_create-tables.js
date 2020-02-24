exports.up = function (knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 30)
        .notNullable()
        .unique();
      tbl.string('password', 128)
        .notNullable();
    })

    .createTable('types', tbl => {
      tbl.increments();
      tbl.string('name', 128)
        .notNullable()
        .unique();
    })

    .createTable('pokemon', tbl => {
      tbl.increments();
      tbl.string('name', 128)
        .notNullable()
        .unique();
      tbl.integer('type1_id')
        .unsigned()
        .references('id')
        .inTable('types')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      // tbl.integer('type2_id')
      //   .unsigned()
      //   .references('id')
      //   .inTable('types')
      //   .onDelete('CASCADE')
      //   .onUpdate('CASCADE');
    })

    .createTable('teams', tbl => {
      tbl.increments();
      tbl.string('team_name')
        .notNullable();
      tbl.string('pokemon1_dex')
        .notNullable()
        .references('name')
        .inTable('pokemon')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.string('pokemon2_dex')
        .notNullable()
        .references('name')
        .inTable('pokemon')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.string('pokemon3_dex')
        .notNullable()
        .references('name')
        .inTable('pokemon')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.string('pokemon4_dex')
        .notNullable()
        .references('name')
        .inTable('pokemon')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.string('pokemon5_dex')
        .notNullable()
        .references('name')
        .inTable('pokemon')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.string('pokemon6_dex')
        .notNullable()
        .references('name')
        .inTable('pokemon')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('teams')
    .dropTableIfExists('pokemon')
    .dropTableIfExists('types')
    .dropTableIfExists('users')
}