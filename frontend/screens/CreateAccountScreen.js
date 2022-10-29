import { useState } from 'react'
import { View, StyleSheet,Text } from 'react-native'
import { Input,Button } from '@rneui/themed'

export default function CreateAccountScreen({ navigation }){
    const [accountForm, setAccountForm] = useState({
        userName: "",
        email:"",
        password:"",
        password2:""
    })

    const {userName, email, password, password2} = accountForm

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
            navigation.navigate('Roster')
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