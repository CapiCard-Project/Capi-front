import apiService from './apiService';

export const getCard = async (probability, setCard) => {
    try {
        const response = await apiService.post('capiOpenPack', {
            probability: probability
        });

        if(response.data.status === 200){
            setCard(response.data.card)
            
        }else{
            console.log('Error al abrir el sobre')
            console.log(response.data)
        }

    }catch(error){
        console.error(error);
    }

}

//actualizacion de coints en base de datos
export const updateCapiPoints = async (capiPoints) => {

    try {

        const response = await apiService.put('update-coins', {
            capiPoints: capiPoints
        });

        if (response.data.status === 200) {
            console.log('Coins actualizados')
        }else{
            console.log('Error al actualizar los coins')
        }
    }catch(error){
        console.error(error);
    }

}

//funcion para guardar las cartas en la base de datos
export const saveCardByUser = async (cardId) =>  {

    try {
        const response = await apiService.post('saveCardByUser', {
            'card_id': cardId
        });
        return response.data;
    } catch (error) {
        console.error(error)
    }
}