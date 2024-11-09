import { useContext } from "react"
import apiService from "./apiService"
import { toast } from "react-hot-toast"
import { CapiPointsContext } from "../Provider/CapiPointsProvider"


// Función para registrar un usuario
export const LoginAPI = async (email, password, navigate, setIsload) => {

    try {
        const response = await apiService.post('login', {
            email: email,
            password: password
        })
        if (response.data.status === 200) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userImage', response.data.user.image)

            navigate('/home')
            toast.success('Successful login')

            return response.data.user
        }
    }catch(error){
        console.error(error);
        
        if (error.response.status === 401) {
            setIsload(false)
            toast.error('Incorrect email or password')
        } else {
            setIsload(false)
            toast.error('Error in login')
        }
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
            toast.success('Registered successfully') 
        }
    } catch (error) {
        console.error('Error data:', error.response.data);
        toast.error('Error in registration')
    }
}


