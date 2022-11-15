import {useState} from 'react'
import { STUDENTS } from '../shared/students'
import {View} from 'react-native'
import { Input, CheckBox,Button } from '@rneui/themed'




const StudentForm = ({navigation}) => {

    const [name, setName] = useState("")
    const [behavior, setBehavior] = useState("Fair")
    const [assignments, setAssignments] = useState(false)

    const [students, setStudents ] = useState(STUDENTS)



    const addNewStudent = () => {
        const idNumber =  Math.floor(Math.random()*10000) + 1;

        //new student is null, must figure out how to add new student with the set info
        const newStudent = { id: idNumber, name, behavior, assignments};
        setStudents([...students, newStudent])
        console.log('Student Name:', name)
        console.log('Student Behavior:', behavior)
    }

    const resetInput = () => {
        setName("")
        setBehavior("")
        setAssignments(false)
    }


    return(
        <View>
           
            <Input 
                
                label="Students' Name"
                placeholder="Jane Doe"
                value={name}
                onChange={(value) => setName(value)}
            />
             <Input 
      
                label="Behavior"
                placeholder="Fair"
                value={behavior}
                onChange={(value) => setBehavior(value)}
            />
             <CheckBox 
                title="Missing Assignments"
                checked={assignments}
                onPress={(value) => setAssignments(value)}
            />
             <Button 
                title="Add New Student"
                icon={{
                    name:'plus',
                    type:'font-awesome',
                    size: 15,
                    color:'steelblue'  
                }}
                onPress={ () => {
                    addNewStudent()
                    navigation.navigate('Roster')
                }
                    
                }

       />
        </View>
    )
}

export default StudentForm