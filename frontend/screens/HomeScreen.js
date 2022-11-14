import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './LoginScreen'
import  CreateAccountScreen from './CreateAccountScreen'
import RosterScreen from './RosterScreen'
import StudentScreen from './StudentScreen'


export default function HomeScreen(){

  const Stack = createNativeStackNavigator();

  return(
  
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
            headerStyle: {
                backgroundColor: 'steelblue'
            },
            headerTintColor: '#fff',
        }}
    >
      
      <Stack.Screen  
        name='Login' 
        component={LoginScreen} />
      <Stack.Screen 
        name='Create Account' 
        component={CreateAccountScreen}/> 
      <Stack.Screen 
        name='Roster' 
        component={RosterScreen}
       options={{ title: 'Student Portal'}}
       
       /> 
       <Stack.Screen 
        name='Add New Student' 
        component={StudentForm}
       
       /> 
      <Stack.Screen 
        name='Student' 
        component={StudentScreen}
        options={({ route }) => ({
          title: route.params.student.name
        })}
      /> 
      
    </Stack.Navigator>
  );

}
  

const styles = StyleSheet.create({
  
})