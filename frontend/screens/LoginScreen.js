import React from "react";
import { Input, Button } from "@rneui/themed";
import { StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }){

 
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
                
            }}
            onPress={() => navigation.navigate('Roster')}
            />
            <Button 
            title="Create Account"
            accessibilityLabel='Create Account Button'
            type="clear"
            onPress = {() => navigation.navigate('Create Account')}
            
              />
            
                
            </>
);
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      marginTop: 30,
      backgroundColor: '#fff',
    },
    content: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
  
    }
  
    
  });
  


