import { useEffect, useState } from 'react'
// import {useSelector, useDispatch} from 'react-redux'
import { View, StyleSheet,Text, ToastAndroid } from 'react-native'
import { Input,Button } from '@rneui/themed'
import * as SecureStore from 'expo-secure-store'
// import {register, reset} from '../features/auth/authSlice'
//import Spinner from '../components/Spinner'

export default function CreateAccountScreen({ navigation }){
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // const dispatch = useDispatch()

    // const {user, isLoading, isError, isSuccess, message } = useSelector(
    //     (state) => state.auth)

    // useEffect(() => {
    //     if(isError){
    //         ToastAndroid.show(message)
    //     }
    //     if(isSuccess || user){
    //          navigation.navigate('Roster')
    //     }
    //     dispatch(reset())
    // }, [user,isError, isSuccess, message, dispatch])

   useEffect(() => {
    SecureStore.getItemAsync('userinfo').then((userdata) => {
        const userinfo = JSON.parse(userdata);
        if(userinfo){
          setUserName(userinfo.userName)
          setEmail(userinfo.email);
          setPassword(userinfo.password)
        }
      })
   },[])
    const resetForm = () => {
        setUserName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }
    const onSubmit = () => { 
        if(password !== confirmPassword){
        ToastAndroid.show('Passwords do not match', ToastAndroid.SHORT, ToastAndroid.CENTER)
      
    } else {
        navigation.navigate('Roster')
        // const userData = {
        //     userName, 
        //     email, 
        //     password, 
        // }
        // dispatch(register(userData))
       
     }
     resetForm()
    }
    

    // if(isLoading){
    //     return <Spinner />
    // }
    return(
        <>
        <View style={styles.container}>
            <Text style={styles.text}>Create your account</Text>
        
            <Input 
                placeholder='User Name' 
                inputContainerStyle={{borderWidth: 1, borderRadius:5}}
                leftIcon={{type:'font-awesome', name:'user'}}
                leftIconContainerStyle={{marginRight: 10, marginLeft: 10}} 
                value={userName}
                onChangeText={(value) => setUserName(value)}
            />
            
            <Input 
                placeholder='Email'
                inputContainerStyle={{borderWidth: 1, borderRadius:5}}
                leftIcon={{type:'font-awesome', name:'envelope'}} 
                leftIconContainerStyle={{marginRight: 10, marginLeft: 10}}
                value={email}
                onChangeText={(value) => setEmail(value)}
            />

            <Input 
                placeholder='Password' 
                secureTextEntry={true}
                inputContainerStyle={{borderWidth: 1, borderRadius:5}}
                leftIcon={{type:'font-awesome', name:'lock'}}
                leftIconContainerStyle={{marginRight:10, marginLeft: 10}}
                value={password}
                onChangeText={(value) => setPassword(value)}
            />

            <Input 
                placeholder='Confirm Password' 
                secureTextEntry={true}
                inputContainerStyle={{borderWidth: 1, borderRadius:5}}
                leftIcon={{type:'font-awesome', name:'lock'}}
                leftIconContainerStyle={{marginRight:10, marginLeft: 10}}
                value={confirmPassword}
                onChangeText={(value) => setConfirmPassword(value)}  
            />

            <Button 
            title='Create Account' 
            accessibilityLabel='Create Account Button'
            buttonStyle={{
                backgroundColor: 'steelblue',
                borderRadius:10, 
                margin: 15,
                padding:15
            }} 
            containerStyle={{ width: 300}}
            onPress={() => {
                onSubmit();
            
            }}
        />
        </View>  
        </>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      margin: 20, 
      justifyContent: 'center',
      alignItems: 'center'
      
    },
   
    text:{
      fontSize: 20,
      margin: 20, 
      justifyContent: "center",

    },
  
  });