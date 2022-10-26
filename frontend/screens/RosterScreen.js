
import {useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Button, ListItem } from '@rneui/themed'
import StudentScreen from './StudentScreen'
import { STUDENTS } from '../shared/students'


const  RosterScreen = ({navigation}) => {
    
  const [students, setStudents ] = useState(STUDENTS)

    const renderStudent = ({item: student}) => {
        return(
            <ListItem 
                onPress={() => 
                    navigation.navigate('Student', { student })
            }
            >  
            <ListItem.Content>
                <ListItem.Title>{student.name}</ListItem.Title>
            </ListItem.Content>     
            </ListItem>
        );
    };
    return(
        <>
          
        <View style={styles.container}>
           
                <Button 
                containerStyle={{
                    width: 200,
                }}
                title="Add Student"
                type="clear"
                color="steelblue"
                icon={{type:'font-awesome', name: 'plus', color:'steelblue'}}
                iconContainerStyle={{marginRight: 10}}
                onPress={() => navigation.navigate('Student') }
                />
        
        <FlatList
            data={students}
            renderItem={renderStudent}
            keyExtractor={(item) => item.id.toString()}
            />
            
        </View>
        
        </>
  
    )    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 20
    }, 

})

export default RosterScreen