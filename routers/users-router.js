const router = require('express').Router();
const Users = require('../helpers/users-model.js');
const Teams = require('../helpers/teams-model.js');
const restricted = require('../middleware/restricted.js');
// const validatePlantId = require('../middleware/validate-plant-id.js');
// const checkForPlantData = require('../middleware/check-for-plant-data.js');

// *****************************************
// GET a list of teams
// *****************************************
router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Could not receive the list of users' })
    })
})

// *****************************************
// GET a specific user by id
// *****************************************
router.get('/:id', restricted, (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Could not receive the specified user' })
    })
})

// *****************************************
// UPDATE a user's information
// *****************************************
router.put('/:id', restricted, (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  Users.update(id, changes)
    .then(editUser => {
      console.log(updatedUser);
      res.status(200).json(updatedUser);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: 'The user information could not be modified' });
    })
})

// *****************************************
// DELETE a user from the database
// *****************************************
router.delete('/:id', restricted, (req, res) => {
  const id = req.params.id;

  Users.remove(id)
    .then(deleted => {
      console.log(deleted);
      res.status(200).json({ success: `the user was successfully deleted from the database` });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: 'The user could not be deleted' });
    })
})

// *****************************************
// GET a list of teams for a specific user
// *****************************************
router.get('/:id/teams', restricted, (req, res) => {
  console.log(req.params.id);
  Teams.findTeamsByUser(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Could not receive the list of teams for the specified user' })
    })
})

// *****************************************
// ADD a team for the specified user
// *****************************************
router.post('/:id/teams', restricted, (req, res) => {
  const id = req.params.id;
  let teams = req.body;
  teams = { ...teams, team_id: id };

  Teams.add(teams)
    .then(newTeam => {
      res.status(201).json(newTeam);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error saving the team to the database' });
    })
})

module.exports = router;