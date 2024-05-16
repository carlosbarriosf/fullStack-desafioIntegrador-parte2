import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
})

export const getProducts = async (data) => {
    const resp = await axiosInstance.get(data);
    console.log(resp)
    return resp.data.products;
}

export const getProductsById = async (data) => {
    const resp = await axiosInstance.get(data);
    return resp.data.product;
}

export const postComment = async (body) => {
    const resp = await axiosInstance.post('/messages', body);
    return resp.data
}

export const postProduct = async (body) => {
    const formData = new FormData();
    Object.entries(body).forEach(([key, value]) => {
        formData.append(key, value)
    })
    const resp = await axiosInstance.post('/products', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    });
    return resp.data
}