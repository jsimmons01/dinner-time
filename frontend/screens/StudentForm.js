import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { STUDENTS } from '../shared/students'
import {View} from 'react-native'
import { Input, CheckBox,Button } from '@rneui/themed'
import { createStudent } from '../features/students/studentSlice'




const StudentForm = ({navigation}) => {

    const [students, setStudents ] = useState(STUDENTS)

   //const dispatch = useDispatch();

   const [name, setName] = useState("")
   const [behavior, setBehavior] = useState("")
   const [assignments, setAssignments] = useState("")


    const addNewStudent = () => {
        const idNumber =  Math.floor(Math.random()*10000) + 1;

        const newStudent = { id: idNumber, name: name, behavior: behavior, assignments: assignments};

        setStudents(STUDENTS.push(newStudent))
        console.log('Student Name:', name)
        console.log('Student Behavior:', behavior)
        console.log('Student assignments:', assignments)
        console.log('Students:', STUDENTS)
    }

    

    const onPress = () => {
        addNewStudent();
       // dispatchEvent(createStudent({...students, newStudent}))
        navigation.navigate('Roster')
    }

    return(
        <View>
          
            <Input 
                
                label="Students' Name"
                placeholder="Jane Doe"
                value={name}
                onChangeText={(value) => setName(value)}
            />
             <Input 
      
                label="Behavior"
                placeholder="Fair"
                value={behavior}
                onChangeText={(value) => setBehavior(value)}
             
            />
             <CheckBox 
                title="Missing Assignments"
                name='assignments'
                checked={assignments}
                onPress={() => setAssignments(!assignments)}
             
            />
             <Button 
                title="Add New Student"
                icon={{
                    name:'plus',
                    type:'font-awesome',
                    size: 15,
                    color:'steelblue'  
                }}
                onPress={onPress}

       />
        </View>
    )
}

export default StudentForm