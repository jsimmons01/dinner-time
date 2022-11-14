import {useState} from 'react'

import {View} from 'react-native'
import { Input, CheckBox } from '@rneui/themed'

const [name, setName] = useState("")
const [behavior, setBehavior] = useState("Fair")
const [assignments, setAssignments] = useState(false)


const StudentForm = () => {

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
        </View>
    )
}

export default StudentForm