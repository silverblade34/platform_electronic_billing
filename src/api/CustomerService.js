import axiosInstance from '@/config/http.config';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllCustomerApi(token) {
    return axiosInstance.get(`${baseURL}/api/client/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export function createCustomerApi(data, token) {
    return axiosInstance.post(`${baseURL}/customers`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function updateCustomerApi(id, data, token) {
    return axiosInstance.patch(`${baseURL}/customers/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function deleteCustomerApi(id, token) {
    return axiosInstance.delete(`${baseURL}/customers/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
