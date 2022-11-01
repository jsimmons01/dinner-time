import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import 'localstorage-polyfill';




export default function App() {

  return(
    <Provider store={store}>
      <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
    </Provider>
    
  
  )
}

