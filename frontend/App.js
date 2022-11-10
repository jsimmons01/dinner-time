import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Spinner from './components/Spinner';





export default function App() {

  return(
    <Provider store={store}>
      <PersistGate loading={ <Spinner />} persistor={persistor}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </PersistGate> 
    </Provider>
    
  
  )
}

