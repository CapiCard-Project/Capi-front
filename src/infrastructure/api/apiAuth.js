import apiService from "./apiService"
import { toast } from "react-hot-toast"

// Función para registrar un usuario
export const LoginAPI = async (email, password, navigate) => {
    try {
        const response = await apiService.post('login', {
            email: email,
            password: password
        })
        console.log(response)
        if (response.data.status === 200) {
            localStorage.setItem('token', response.data.token)
            navigate('/home')
            toast.success('Inicio de sesión exitoso')
        }else{
            toast.error('Error al iniciar sesión')
        }
    }catch(error){
        console.error(error);
    }
}

// Función para registrar un usuario
export const registrarAPI = async (username, email, password, navigate) => {
    console.log(username, email, password)
    try {
        const response = await apiService.post('register', {
            name: username,
            email: email,
            password: password
        })
        //validacion de la respuesta
        if(response.data.status === 201){
            localStorage.setItem('token', response.data.token)
            navigate('/home')
            toast.success('Registro exitoso') 
        }else{
            toast.error('Error al registrar')
        }
    } catch (error) {
        console.error(error);
        console.error('Error data:', error.response.data); 
    }
}


