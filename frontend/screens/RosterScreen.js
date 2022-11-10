
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Modal, Pressable, Alert } from 'react-native'
import {  ListItem, Icon, Input, Button } from '@rneui/themed'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

/*************************************
 * Design for log in:
 * when typing make sure it can be read and doesn't mis with other text
 * make input boxes
 * change the clor of remember box
 * add pic to the top
 ***********************************/


import { STUDENTS } from '../shared/students'

const  RosterScreen = ({navigation}) => {   

// const dispatch = useDispatch()
// const {user} = useSelector((state) => state.auth)   

// useEffect(() => {
//     if(!user){
//         navigation.navigate('Login')
//     }
// }, [user] )

const [students, setStudents ] = useState(STUDENTS)
const [modalVisible, setModalVisible] = useState(false);
const [newStudentName, setNewStudentName] = useState("");

const [newStudentBehavior, setNewStudentBehavior] = useState("Fair")
const [newStudentAssignment, setNewStudentAssignment] = useState(false)

const addNewStudent = () => {
    const idNumber =  Math.floor(Math.random()*10000) + 1;

    const newStudent = { id: idNumber, name: newStudentName, behavior: newStudentBehavior, assignments: newStudentAssignment};
    setStudents(students.push(newStudent))
}

const deleteStudent = () => {
    setStudents(students.filter((student)=> student.id !==id))
}

// const reload= () => window.location.reload();
 
const resetInput = () => {
    setNewStudentName("")
}

const onLogout = () => {
    // dispatch(logout())
    // dispatch(reset())
    navigation.navigate('Login')
}

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
              
            <FlatList
                data={students}
                renderItem={renderStudent}
                keyExtractor={(item) => item.id.toString()}
                />
                
            <Pressable
            style={[styles.button]}
            onPress={() => setModalVisible(true)}
            >
            
            <Text style={styles.textStyle}> <Icon 
            type="font-awesome"
            name="plus"
            color="steelblue"
            /> Add Student</Text>
            </Pressable>
        </View>
      
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Cancel new student");
            setModalVisible(!modalVisible);
           
            }}
            
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Input 
            placeholder="Student's Name"
            value={newStudentName}
            onChangeText={(value)  => setNewStudentName(value)}
             />
           

                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                
                    Alert.alert(`${newStudentName} added`);     
                    addNewStudent()
                    setModalVisible(!modalVisible);
                    resetInput();
    
                }     
                }
                >
                <Text>Add new student</Text>
                </Pressable>
                
            </View>
            
           
            </View>
        </Modal>
        <Button
            containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
            }}
            title="Logout"
            icon={{
                name:'sign-out',
                type:'font-awesome',
                size:15,
                color: 'steelblue'
            }}
            type="clear"
            titleStyle={{color: 'steelblue'}}
            onPress={() => onLogout()}
            />

       
        </>
  
    )    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 20
    }, 
    centeredView: {
        flex: 1,
        justifyContent: "center",
      
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        
      },
      
      buttonClose: {
        backgroundColor: "steelblue",
      },
      textStyle: {
        color: "steelblue",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },

})

export default RosterScreen