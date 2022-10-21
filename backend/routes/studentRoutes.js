const express = require('express')
const router = express.Router()
const { getStudents, 
        setStudents,
        updateStudent,
        deleteStudent, } = require('../controllers/studentController.js')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getStudents).post(protect, setStudents)

router.route('/:id').delete(protect, deleteStudent).put(protect, updateStudent)


module.exports = router