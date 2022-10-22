import React from "react";
import { Platform } from "react-native";
import Constants from 'expo-constants';
import { Input, Button } from "@rneui/themed";
import { createStacknavigator } from '@react-navigation/native-stack'

const DirectoryNavigator = () => {
    const Stack = createStacknavigator();
    return(
        <Stack.DirectoryNavigator
            initialRoutename='Directory'
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'lightsteelblue'
                },
                headerTintColor: '#fff',
            }}
            >
                <Stack.Screen
                    name='Login'
                    component={DirectoryScreen}
                    options={{ title:'Login'}}
                />
                <Stack.Screen
                name='Student'
                component={Student}
                options={{ title:""}}
                />
            </Stack.DirectoryNavigator>
    )
};
export default function Login(){

    return(
   
        <>
            
            <Input placeholder="Email" 
            leftIcon={{type:'font-awesome', name: 'envelope'}}
            />
            <Input placeholder="Password" secureTextEntry={true}/>
           
            <Button 
            title="LOGIN" 
            accessibilityLabel='Login button'
            buttonStyle={{
                backgroundColor: 'steelblue',
                borderRadius:30, 
            }} 
            containerStyle={{
                width: 200,
                
            }}/>
        </>
       
 

);
}


