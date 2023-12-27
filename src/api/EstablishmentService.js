import axiosInstance from '@/config/http.config';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllEstablishmentApi(token) {
    return axiosInstance.get(`${baseURL}/establishment/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export function createEstablishmentApi(data, token) {
    return axiosInstance.post(`${baseURL}/establishment/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function updateEstablishmentApi(id, data, token) {
    return axiosInstance.put(`${baseURL}/establishment/${id}/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function deleteEstablishmentApi(id, token) {
    return axiosInstance.delete(`${baseURL}/establishment/${id}/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
