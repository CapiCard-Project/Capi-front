import apiService from "./apiService";

export const saleCardApi = async (price, cardId, hours) => {

    try {

        const response = await apiService.post('cards/sale', {
            'card_id': cardId,
            'price': price,
            'time' : hours
        })
    
        return response.data

    } catch (error) {
        console.error(error)
    }
}

export const getCardsForSale = async () => {
    try {

        const response = await apiService.get('cards/sale')
        return response.data

    } catch (error) {
        console.error(error)
    }
}

export const buyCardApi = async (id_market, id_card, id_user, price) => {
    try {

        const response = await apiService.post('cards/buy' , {
            'id_market': id_market,
            'id_user': id_user,
            'id_card': id_card,
            'price': price
        });
        console.log(response)

        return response.data

    } catch (error) {
        console.error(error)
    }
}