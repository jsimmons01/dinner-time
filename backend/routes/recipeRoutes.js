const express = require('express')
const { getRecipes } = require('../controllers/recipeController')
const router = express.Router()
const { getGoals, 
        setRecipes,
        updateRecipes,
        deleteRecipes, } = require('../controllers/recipeController.js')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getRecipes).post(protect, setRecipes)

router.route('/:id').delete(protect, deleteRecipes).put(protect, updateRecipes)


module.exports = router