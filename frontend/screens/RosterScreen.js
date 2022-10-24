
import { View, StyleSheet, Flatlist } from 'react-native'
import { Button, ListItem } from '@rneui/themed'
import { useState } from 'react'
import { STUDENTS } from '../shared/students'

export default function Student({ navigation }){
    
    const [students, setStudent]= useState(STUDENTS)
    const renderStudents = ({item: student}) => {
        return(
            <ListItem 
            onPress={()=> 
                navigation.navigate('Student', { student })
            }
            >       
            </ListItem>
        )
    }
    return(
        <>
         <View style={styles.container}>
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
            
        </View>
        <Flatlist
        data={students}
        renderItem={renderStudents}
        keyExtractor={(item) => item.id.toString()}
        />
        
      
        </>       
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