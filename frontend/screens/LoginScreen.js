import { useState, useEffect } from "react";
import { Input, Button, CheckBox } from "@rneui/themed";
import { StyleSheet, View, Text, ToastAndroid } from 'react-native';
import Spinner from '../components/Spinner'
import * as SecureStore from 'expo-secure-store'


const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);




  useEffect(() => {
    SecureStore.getItemAsync('userinfo').then((userdata) => {
      const userinfo = JSON.parse(userdata);
      if(userinfo){
        setEmail(userinfo.email);
        setPassword(userinfo.password)
        setRemember(true);
      }
    })
}, [])


const onSubmit = async () => {
  navigation.navigate('Roster')
  console.log('email:', email)
  console.log('password:', password)
  console.log('remember:', remember)
  if(remember){
    SecureStore.setItemAsync(
      'userinfo',
      JSON.stringify({
        email,
        password

      })
    ).catch((error) => console.log('Could not save user info', error))
  } else {
    SecureStore.deleteItemAsync('userinfo').catch((error)=> 
    console.log('Could not delete user info', error)
    );
  }
}

    return(
       <>
       <View style={styles.container}>
  
        <View style={styles.intro}>
        <Text style={styles.introContent}>Welcome to the Student Portal!</Text>
          <Text style={styles.introContent}>Login or create an account.</Text>
        </View>
      
          <View style={styles.content}>
         
          <Input placeholder="Email" 
            leftIcon={{type:'font-awesome', name:'envelope'}}
          
            leftIconContainerStyle={{margin: 10}}
            value={email}
            onChangeText={(value) => setEmail(value)}
            />
            <Input placeholder="Password" secureTextEntry={true}
            leftIcon={{type:'font-awesome', name:'lock'}}
            leftIconContainerStyle={{margin: 10}}
            value={password}
            onChangeText={(value) => setPassword(value)}
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
             
              onSubmit();
             
             
            }} 
            />
            <CheckBox
              title='Remember Me'
              center
              checked={remember}
              onPress={() => setRemember(!remember)} 
              />
            <Button 
            title="Create Account"
            accessibilityLabel='Create Account Button'
            type="clear"
            onPress = {() => {
            navigation.navigate('Create Account')
            } }    
            
              />
    
        </View>

       </View>
         
     
      </>
);
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      margin: 20,
    },
    intro:{
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    introContent:{
       
      fontSize: 20,
      
    },
    content: {
      flex: 1, 
      justifyContent: 'center',
     
     
    },
  });
  
export default LoginScreen