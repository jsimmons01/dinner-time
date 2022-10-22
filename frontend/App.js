import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './screens/LoginScreen';
import Header from './components/Header';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <View style={styles.top}><Header /></View>
      <View style={styles.content}>
      <Login />
      </View>

      </NavigationContainer>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
  },
  top:{
    padding: 10,
    backgroundColor: 'steelblue',
  },
  content: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',

  }

  
});
