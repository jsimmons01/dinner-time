const asyncHandler = require('express-async-handler')

const Student = require('../models/studentModel')
const User = require('../models/userModel')

//@desc Get students
//@route GET /api/students
//@access Private
const getStudents = asyncHandler(async (req, res) => {
    const students = await Student.find({user: req.user.id })
    res.status(200).json(students)
})

//@desc Set student
//@route POST /api/students
//@access Private
const setStudents = asyncHandler(async (req, res) => {
    if(!req.body.studentName){
        res.status(400)
        throw new Error('Please add a student')
    }

    const student = await Student.create({
        studentName: req.body.studentName,
        user: req.user.id
    })

    res.status(200).json(student)
})

//@desc Update student
//@route PUT /api/students/:id
//@access Private
const updateStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)
    
    if(!student){
        res.status(400)
        throw new Error("Student not found")
    }

    const user = await User.findById(req.user.id)

    //Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
     
    //Make sure the login user matches the student user
    if(student.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedStudent)
})

//@desc Delete student
//@route DELETE /api/students/:id
//@access Private
const deleteStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)

    if(!student){
        res.status(400)
        throw new Error("Student not found")
    }
    
    const user = await User.findById(req.user.id)

    //Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
     
    //Make sure the login user matches the student user
    if(student.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

   await student.remove()
    res.status(200).json({id: req.params.id})
})
module.exports = {
    getStudents, 
    setStudents,
    updateStudent,
    deleteStudent,
}