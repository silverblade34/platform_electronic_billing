import axiosInstance from '@/config/http.config';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllCustomerApi(token) {
    return axiosInstance.get(`${baseURL}/client/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export function createCustomerApi(data, token) {
    return axiosInstance.post(`${baseURL}/client/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function updateCustomerApi(id, data, token) {
    return axiosInstance.put(`${baseURL}/client/${id}/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function deleteCustomerApi(id, token) {
    return axiosInstance.delete(`${baseURL}/client/${id}/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
