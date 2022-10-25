
import {useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Button, ListItem } from '@rneui/themed'
import { STUDENTS } from '../shared/students'


export default function  RosterScreen({ navigation }) {
    
  const [students, setStudents ] = useState(STUDENTS)


  //render function for flatlist
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
        );
    };
    return(
        <>
          
        <View style={styles.container}>
            <FlatList
            data={students}
            renderItem={renderStudent}
            keyExtractor={(item) => item.id.toString()}
            />
            
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

