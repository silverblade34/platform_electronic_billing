import axiosInstance from '@/config/http.config';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllStoreApi(token) {
    return axiosInstance.get(`${baseURL}/store/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export function createStoreApi(data, token) {
    return axiosInstance.post(`${baseURL}/store/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function updateStoreApi(id, data, token) {
    return axiosInstance.put(`${baseURL}/store/${id}/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function deleteStoreApi(id, token) {
    return axiosInstance.delete(`${baseURL}/store/${id}/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
