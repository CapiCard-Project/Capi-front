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
            sessionStorage.setItem('token', response.data.token)
            sessionStorage.setItem('userName', response.data.user.name)

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
export const registrarAPI = async (username, email, password, navigate, setIsload) => {
    console.log(username, email, password)
    try {
        const response = await apiService.post('register', {
            name: username,
            email: email,
            password: password,
            image: 'https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg'
        })
        console.log(response)
        //validacion de la respuesta
        if(response.data.status === 201){
            navigate('/login')
            toast.success('Registered successfully')
        }
    } catch (error) {
        console.error('Error data:', error.response.data);
        setIsload(false) 
        toast.error('Error in registration')
    }
}

export const uploadImage = async (file) => {

    try {
        const formData = new FormData(); 
        formData.append('image', file);

        const response = await apiService.post('uploadImage', formData);
        console.log(response)
        return response.data

    } catch (error) {
        console.error(error)
    }

}

