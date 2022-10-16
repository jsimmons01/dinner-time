const asyncHandler = require('express-async-handler')

const Recipe = require('../models/recipeModel')

//@desc Get recipes
//@route GET /api/recipes
//@access Private
const getRecipes = asyncHandler(async (req, res) => {
    const recipes = await Recipe.find()
    res.status(200).json(recipes)
})

//@desc Set recipe
//@route POST /api/recipes
//@access Private
const setRecipes = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const recipe = await Recipe.create({
        text: req.body.text
    })

    res.status(200).json(recipe)
})

//@desc Update recipes
//@route PUT /api/recipes/:id
//@access Private
const updateRecipes = asyncHandler(async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    
    if(!recipe){
        res.status(400)
        throw new Error("Recipe not found")
    }
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedRecipe)
})

//@desc Delete goal
//@route DELETE /api/goals/:id
//@access Private
const deleteRecipes = asyncHandler(async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    if(!recipe){
        res.status(400)
        throw new Error("Recipe not found")
    }

   await recipe.remove()
    res.status(200).json({id: req.params.id})
})
module.exports = {
    getRecipes, 
    setRecipes,
    updateRecipes,
    deleteRecipes,
}