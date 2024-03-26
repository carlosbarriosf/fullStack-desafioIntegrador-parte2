import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://65b1426fd16d31d11bde75f5.mockapi.io/api'
})

export const getProducts = async (data) => {
    const resp = await axiosInstance.get(data);
    return resp.data;
}