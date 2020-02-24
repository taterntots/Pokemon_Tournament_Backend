const router = require('express').Router();
const Pokemon = require('../helpers/pokemon-model.js');
// const restricted = require('../middleware/restricted.js');
// const validatePlantId = require('../middleware/validate-plant-id.js');
// const checkForPlantData = require('../middleware/check-for-plant-data.js');

// *****************************************
// GET a list of pokemon
// *****************************************
router.get('/', (req, res) => {
  Pokemon.find()
    .then(pokemon => {
      res.status(200).json(pokemon);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Could not receive the list of pokemon' })
    })
})

// *****************************************
// ADD a pokemon to the database
// *****************************************
router.post('/', (req, res) => {
  Pokemon.add(req.body)
    .then(savedPokemon => {
      console.log(savedPokemon);

      res.status(201).json({ savedPokemon });
    })
    .catch(error => {
      res.status(500).json(error);
    });
})

// *****************************************
// DELETE a pokemon from the database
// *****************************************
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Pokemon.remove(id)
    .then(deleted => {
      console.log(deleted);
      res.status(200).json({ success: `the pokemon was successfully deleted from the database` });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: 'The pokemon could not be deleted' });
    })
})

module.exports = router;