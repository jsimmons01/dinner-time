import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

const API_URL = '/api/users/'

//Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data){
        SecureStore.setItemAsync(
            'user', JSON.stringify(response.data)
          ).catch((error) => console.log('A problem occured', error))
    }

    return response.data
}

const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data){
        SecureStore.setItemAsync(
            'user', JSON.stringify(response.data)
          ).catch((error) => console.log('A problem occured', error))
    }

    return response.data

}

const logout = async () => {
    SecureStore.deleteItemAsync('user').catch((error)=> 
    console.log('Could not delete user', error)
    );
}

const authService = {
    register,
    logout, 
    login,
}

export default authService