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

export const createPaymentPSE = async (paymentdata, setIsLoad) => {
    try {

        const response = await apiService.post('createPayment', paymentdata)
        console.log('response:', response.data)
        if (response.status === 200) {
            window.location.href = response.data.transaction_details.external_resource_url;
            setIsLoad(false);
        } else {
            setIsLoad(false);
            toast.error('Error in payment')
        }

    } catch (error) {
        setIsLoad(false);
        toast.error('data is not correct')
        console.error(error);
    }
}

export const consultPayment = async (payment_id) => {
    try {

        const response = await apiService.post('saveTransactionByUser', {
            'transaction_id': payment_id
        });

        return response.data

    } catch (error) {
        console.error(error);
    }
}