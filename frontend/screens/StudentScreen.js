import React from 'react';
import { Button, Icon } from '@rneui/themed'
import RenderStudent from '../features/students/RenderStudent'
import { Alert } from 'react-native';



const StudentScreen = ({ route, }) => {

 
  const { student } = route.params;

  return (
    <>
     <RenderStudent student={student} />
    <Button  type="clear"
            onPress= { () =>
            Alert.alert(`Are you sure you want to delete: ${student}`)} >
      <Icon type="font-awesome"
            name="trash"
            color="steelblue"
            />
            Delete Student
    </Button>
    <Button  type="clear" >
      <Icon type="font-awesome"
            name="pencil"
            color="steelblue"
           
            />
            Edit Student
    </Button>
    </>
   
  )
}

export default  StudentScreen
