import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { View, StyleSheet,Text, ToastAndroid } from 'react-native'
import { Input,Button } from '@rneui/themed'
import {register, reset} from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import { Toast } from 'react-toastify/dist/components'

export default function CreateAccountScreen({ navigation }){
    const [accountForm, setAccountForm] = useState({
        userName: "",
        email:"",
        password:"",
        password2:""
    })

    const {userName, email, password, password2} = accountForm

    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth)

    useEffect(() => {
        if(isError){
            ToastAndroid.show(message)
        }
        if(isSuccess || user){
            navigation.navigate('Roster')
        }
        dispatch(reset())
    }, [user,isError, isSuccess, message, dispatch])

    const resetInput = () => {
        setAccountForm({
            userName: "",
            email:"",
            password:"",
            password2:""
        })
    }
    return(
        <>
        <View style={styles.createAccount}>
        <Text style={styles.createAccountText}>Create your account</Text>
        </View>
        
        <View style={styles.content}>
        <Input placeholder='User Name' 
        leftIcon={{type:'font-awesome', name:'user'}}
        leftIconContainerStyle={{marginRight: 10}}
        value={userName}
        onChange={(value) => {
            setAccountForm({userName: value})
        }  }
        />
        
        <Input placeholder='Email'
        leftIcon={{type:'font-awesome', name:'envelope'}} 
        leftIconContainerStyle={{marginRight: 10}}
        value={email}
        onChange={(value) => setAccountForm({email: value})}
        />
        <Input placeholder='Password' secureTextEntry={true}
        leftIcon={{type:'font-awesome', name:'lock'}}
        leftIconContainerStyle={{marginRight:10}}
        value={password}
        onChange={(value) => setAccountForm({password: value})}
        />
         <Input placeholder='Confirm Password' secureTextEntry={true}
        leftIcon={{type:'font-awesome', name:'lock'}}
        leftIconContainerStyle={{marginRight:10}}
        value={password2}
        onChange={(value) => setAccountForm({password2: value})}
        />
        <Button 
        title='Create Account' 
        accessibilityLabel='Create Account Button'
            buttonStyle={{
                backgroundColor: 'steelblue',
                borderRadius:30, 
                margin: 20,
            }} 
           
            onPress={() => {
            
            if(password !== password2){
                ToastAndroid.show('Passwords do not match', ToastAndroid.SHORT, ToastAndroid.CENTER)
            } else {
                const userData = {
                    userName, 
                    email, 
                    password, 
                }
                dispatch(register(userData))
            }
            resetInput();
            }
            
            }/>
        </View>
      
        </>
    )
}

const styles = StyleSheet.create({
    createAccount:{
        alignItems: 'center',
        margin: 20,
    },
    createAccountText:{
        fontSize: 20,
    },
    content:{
       
        margin:20,
        justifyContent: 'center',
        alignItems: 'center'
        
    }
})