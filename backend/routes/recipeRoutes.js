const express = require('express')
const { getRecipes } = require('../controllers/recipeController')
const router = express.Router()
const { getGoals, 
        setRecipes,
        updateRecipes,
        deleteRecipes, } = require('../controllers/recipeController.js')

router.route('/').get(getRecipes).post(setRecipes)

router.route('/:id').delete(deleteRecipes).put(updateRecipes)


module.exports = router