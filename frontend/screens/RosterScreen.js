
import { Button } from '@rneui/themed'

export default function Student(){
    return(
        <>
     
        <Button 
        containerStyle={{
            width: 200,
        }}
        title="Add Student"
        type="clear"
        color="steelblue"
        icon={{type:'font-awesome', name: 'plus', color:'steelblue'}}
        />
        </>
        
    ) 
}