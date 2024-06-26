import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API || 'https://fullstack-desafiointegrador-parte3.onrender.com/api'
})

export const getProducts = async (data) => {
    const resp = await axiosInstance.get(data);
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

export const postCart = async (body) => {
    const resp = await axiosInstance.post('/cart', body);
    return resp.data.populatedCart;
}

export const getCartById = async (id) => {
    const resp = await axiosInstance.get(`/cart/get/${id}`);
    return resp;
}

export const updateCartById = async (id, body) => {
    const resp = await axiosInstance.put(`/cart/update/${id}`, body);
    return resp.data.updatedCart;
}