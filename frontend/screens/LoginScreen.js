import React from "react";
import { Input, Button } from "@rneui/themed";
import { StyleSheet, View } from 'react-native';

export default function LoginScreen({ navigation }){

 
    return(
       <>
        
          <View style={styles.content}>
          <Input placeholder="Email" 
            leftIcon={{type:'font-awesome', name:'envelope'}}
          
            leftIconContainerStyle={{margin: 10}}
            />
            <Input placeholder="Password" secureTextEntry={true}
            leftIcon={{type:'font-awesome', name:'lock'}}
            leftIconContainerStyle={{margin: 10}}
            />
           
            <Button 
            title="LOGIN" 
            accessibilityLabel='Login button'
            buttonStyle={{
                backgroundColor: 'steelblue',
                borderRadius:30, 
                margin: 20,
            }} 
            
            onPress={() => navigation.navigate('Roster')}
            />
            <Button 
            title="Create Account"
            accessibilityLabel='Create Account Button'
            type="clear"
            onPress = {() => navigation.navigate('Create Account')}    
            
              />
    
        </View>
     
      </>
);
}

const styles = StyleSheet.create({

    content: {
      flex: 1, 
      justifyContent: 'center',
      margin: 20,
    },
  });
  


