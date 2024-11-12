import apiService from "./apiService";

export const getCardByUser = async () => {
    try {
        const response = await apiService.get('cardsByUser')
        return response.data;

    } catch (error) {
        console.error(error);
    }
}