const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    studentName: {
        type: String, 
        required: [true, 'Please add a text value']
    },
    text:{
        type: String,
        required: false,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Student', studentSchema)