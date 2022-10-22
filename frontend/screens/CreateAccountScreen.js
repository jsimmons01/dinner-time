import { Input,Button } from '@rneui/themed'

export default function CreateAccountScreen({ navigation }){
    return(
        <>
        <Input placeholder='First Name' />
        <Input placeholder='Last Name' />
        <Input placeholder='Email' />
        <Input placeholder='Password' />
        <Button 
        title='Create Account' 
        accessibilityLabel='Create Account Button'
            buttonStyle={{
                backgroundColor: 'steelblue',
                borderRadius:30, 
            }} 
            containerStyle={{
                width: 200,
                
            }}
            onPress={() => navigation.navigate('Roster')}/>
        </>
    )
}