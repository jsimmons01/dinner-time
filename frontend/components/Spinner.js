import {View, ActivityIndicator, Text, StyleSheet} from 'react-native'

function Spinner() {
  return (
  <View style={styles.container}>
    <ActivityIndicator />
  </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: "center"
    }, 

})

export default Spinner