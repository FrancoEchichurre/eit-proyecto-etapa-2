import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const getProducts = async body => {
    const resp = await axiosInstance.get('/market-products')
    return resp.data
}

export const postProduct = async body => {
    console.log('URL productos:', axiosInstance.defaults.baseURL + '/market-products')
    console.log('Datos producto enviados:', body)
    
    try {
        const resp = await axiosInstance.post('/market-products', body)
        console.log('Respuesta exitosa:', resp.data)
        return resp.data
    } catch (error) {
        console.error('Error al subir producto:', error.response?.data)
        console.error('Status error:', error.response?.status)
        throw error
    }
}

export const postContact = async body => {
    const resp = await axiosInstance.post("/contact", body)
    return resp.data
}