import {useState} from 'react'
import {useSelector, useDispatc} from 'react-redux'
import {View} from 'react-native'
import { Input, CheckBox } from '@rneui/themed'


const StudentForm = () => {

    const [studentName, setStudentName] = useState("");
    const [studentBehavior, setStudentBehavior] = useState("Fair")
    const [studentAssignment, setStudentAssignment] = useState(false)

    return(
        <View>
           
            <Input 
                
                label="Students' Name"
                placeholder="Jane Doe"
                value={studentName}
                onChange={(value) => setStudentName(value)}
            />
             <Input 
      
                label="Behavior"
                placeholder="Fair"
                value={studentBehavior}
                onChange={(value) => setStudentBehavior(value)}
            />
             <CheckBox 
                title="Missing Assignments"
                checked={studentAssignment}
                onPress={(value) => setStudentAssignment(value)}
            />
        </View>
    )
}

export default StudentForm