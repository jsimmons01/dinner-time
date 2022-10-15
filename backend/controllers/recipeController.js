//@desc Get recipes
//@route GET /api/recipes
//@access Private
const getRecipes = (req, res) => {
    res.status(200).json({message: 'Get recipes'})
}

//@desc Set recipe
//@route POST /api/recipes
//@access Private
const setRecipes = (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json( {message: `Set favorite recipe`} )
}

//@desc Update recipes
//@route PUT /api/recipes/:id
//@access Private
const updateRecipes = (req, res) => {
    res.status(200).json( {message: `Update favorite recipe ${req.params.id}`} )
}

//@desc Delete goal
//@route DELETE /api/goals/:id
//@access Private
const deleteRecipes = (req, res) => {
    res.status(200).json( {message: `Delete favorite ${req.params.id}`} )
}
module.exports = {
    getRecipes, 
    setRecipes,
    updateRecipes,
    deleteRecipes,
}