import React from "react";
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
      
      <Stack.Screen  name='Login' component={LoginScreen} />
      <Stack.Screen name='Create Account' component={CreateAccountScreen}/> 
      <Stack.Screen name='Roster' component={RosterScreen}/> 
      <Stack.Screen name='Student' component={StudentScreen}/> 
       
      
    </Stack.Navigator>


  );

}
  

