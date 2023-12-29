import axiosInstance from '@/config/http.config';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllVoucherApi(token) {
    return axiosInstance.get(`${baseURL}/list_voucher/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export function createVoucherApi(data, token) {
    return axiosInstance.post(`${baseURL}/voucher/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function findOneVoucherApi(data, token) {
    return axiosInstance.post(`${baseURL}/list_voucher/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function updateVoucherApi(id, data, token) {
    return axiosInstance.put(`${baseURL}/voucher/${id}/`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export function deleteVoucherApi(id, token) {
    return axiosInstance.delete(`${baseURL}/voucher/${id}/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
