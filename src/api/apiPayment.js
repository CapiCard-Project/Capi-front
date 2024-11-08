import apiService from "./apiService";

export const bankList = async (setBackList) => {
    try {

        const response = await apiService.get('bankList')

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

        console.log('response:', response)

    } catch (error) {
        console.error(error);
        console.log(response)
    }
}