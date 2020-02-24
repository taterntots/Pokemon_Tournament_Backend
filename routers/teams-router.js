const router = require('express').Router();
const Teams = require('../helpers/teams-model.js');
// const restricted = require('../middleware/restricted.js');
// const validatePlantId = require('../middleware/validate-plant-id.js');
// const checkForPlantData = require('../middleware/check-for-plant-data.js');

// *****************************************
// GET a list of teams
// *****************************************
router.get('/', (req, res) => {
  Teams.find()
    .then(teams => {
      res.status(200).json(teams);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Could not receive the list of teams' })
    })
})

module.exports = router;