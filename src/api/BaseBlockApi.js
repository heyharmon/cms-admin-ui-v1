import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://cms-v1.test/api',
    // baseURL: 'https://cms-v1-api.bloomcu.com/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    index(param) {
        return apiClient.get('/base-blocks' + param)
    }

    // index(params) {
    //     return apiClient.get('/base-blocks', params)
    // }
}
