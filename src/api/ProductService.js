import axiosInstance from '@/config/http.config';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllProductsApi(token) {
    return axiosInstance.get(`${baseURL}/product/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export function createProductsApi(data, token) {
    return axiosInstance.post(`${baseURL}/product/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function updateProductsApi(id, data, token) {
    return axiosInstance.put(`${baseURL}/product/${id}/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function deleteProductsApi(id, token) {
    return axiosInstance.delete(`${baseURL}/product/${id}/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
