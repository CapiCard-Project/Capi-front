import { json } from "react-router-dom";
import apiService from "./apiService";
import toast from "react-hot-toast";

export const bankList = async (setBackList) => {
    try {

        const response = await apiService.get('bankList')
        console.log('response:', response)
        if (response.status == 200) {
            setBackList(response.data.financial_institutions);
        } else {
            console.log('error al obtener la lista de bancos')
        }

    } catch (error) {
        console.error(error);
    }
}

export const createPaymentPSE = async (paymentdata) => {
    try {

        const response = await apiService.post('createPayment', paymentdata)
        if (response.status === 200) {
            return response.data;
        } else {
            toast.error('Error in payment')
        }

    } catch (error) {
        console.error(error);
        console.log(response)
    }
}