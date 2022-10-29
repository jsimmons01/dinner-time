import { useState, useEffect } from "react";
import { Input, Button } from "@rneui/themed";
import { StyleSheet, View } from 'react-native';

function LoginScreen({ navigation }){
  const [loginData, setLoginData] = useState({
    email: "",
    password:"",
  })
 
  const {email, password} = loginData

  const resetInput = () => {
    setLoginData({
       
        email:"",
        password:"",
      
    })
}
    return(
       <>
        
          <View style={styles.content}>
          <Input placeholder="Email" 
            leftIcon={{type:'font-awesome', name:'envelope'}}
          
            leftIconContainerStyle={{margin: 10}}
            value={email}
            onChante={value => setLoginData({
              email: value})}
            />
            <Input placeholder="Password" secureTextEntry={true}
            leftIcon={{type:'font-awesome', name:'lock'}}
            leftIconContainerStyle={{margin: 10}}
            value={password}
            onChange={(value) => setLoginData({
              password: value
              })}
            />
           
            <Button 
            title="LOGIN" 
            accessibilityLabel='Login button'
            buttonStyle={{
                backgroundColor: 'steelblue',
                borderRadius:30, 
                margin: 20,
            }} 
            
            onPress={() =>{
              navigation.navigate('Roster');
              resetInput();
            }} 
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
  
export default LoginScreen