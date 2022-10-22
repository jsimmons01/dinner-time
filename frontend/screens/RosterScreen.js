import Header from '../components/header'
import { Button } from '@rneui/themed'

export default function Student(){
    return(
        <>
        <Header />
        <Button 
        containerStyle={{
            width: 200,
        }}
        title="Add Student"
        type="clear"
        color="steelblue"
        leftIcon={{type:'font-awesome', name: 'plus', color:'steelblue'}}
        />
        </>
        
    ) 
}