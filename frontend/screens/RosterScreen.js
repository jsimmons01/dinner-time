
import { View, StyleSheet, Flatlist } from 'react-native'
import { Button, ListItem } from '@rneui/themed'
import { useState } from 'react'
import { STUDENTS } from '../shared/students'

export default function RosterScreen({ navigation }){
    
    const [students, setStudent]= useState(STUDENTS)

    const renderStudent = ({item: student}) => {
        return(
            <ListItem 
                onPress={()=> 
                navigation.navigate('Student', { student })
                }
            >  
            <ListItem.Content>
                <ListItem.Title>{student.name}</ListItem.Title>
            </ListItem.Content>     
            </ListItem>
        )
    }
    return(
        
        <Flatlist
        data={students}
        renderItem={renderStudent}
        keyExtractor={(item) => item.id.toString()}
        />
         /* <View style={styles.container}>
        <View style={styles.studentButton}>
            <Button 
            containerStyle={{
                width: 200,
            }}
            title="Add Student"
            type="clear"
            color="steelblue"
            icon={{type:'font-awesome', name: 'plus', color:'steelblue'}}
            onPress={() => navigation.navigate('Student') }
            />
        </View>
            
        </View> */
        
        
      
          
    ) 
   
       
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 20
    },
    studentButton:{
        flex:1,
        margin:20,
        
    },
    

})