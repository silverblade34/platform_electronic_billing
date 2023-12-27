import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;

export function consultationDniRuc(data) {
    return axios.post(`${baseURL}/sunat-api/`, data);
}
