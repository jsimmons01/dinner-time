import { View, StyleSheet } from 'react-native'
import { Input,Button } from '@rneui/themed'

export default function CreateAccountScreen({ navigation }){
    return(
        <>
        <View style={styles.content}>
        <Input placeholder='User Name' 
        leftIcon={{type:'font-awesome', name:'user'}}
        leftIconContainerStyle={{marginRight: 10}}/>
        
        <Input placeholder='Email'
        leftIcon={{type:'font-awesome', name:'envelope'}} 
        leftIconContainerStyle={{marginRight: 10}}
        />
        <Input placeholder='Password' secureTextEntry={true}
        leftIcon={{type:'font-awesome', name:'lock'}}
        leftIconContainerStyle={{marginRight:10}}
        />
        <Button 
        title='Create Account' 
        accessibilityLabel='Create Account Button'
            buttonStyle={{
                backgroundColor: 'steelblue',
                borderRadius:30, 
                margin: 20
            }} 
           
            onPress={() => navigation.navigate('Roster')}/>
        </View>
      
        </>
    )
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        margin:20,
        justifyContent: 'center'
    }
})