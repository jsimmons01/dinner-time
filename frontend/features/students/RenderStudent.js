import { Text, View } from 'react-native'
import { Card } from '@rneui/themed'

export default function RenderStudent({ student }){
    if(student){
        return(
            <Card containerStyle={{padding: 0}}>
                <View style={{justifyContent: 'center', flex: 1}}>
                    <Text 
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 20
                    }}
                    >
                    {student.name}
                    </Text>
                </View>
                    <Text style={{margin: 20}}>{student.behavior}</Text>
                    <Text style={{margin: 20}}>{student.assignments}</Text>
              
            </Card>
        )
    }
    return <View />
};