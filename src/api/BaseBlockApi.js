import axios from 'axios'

const apiClient = axios.create({
    // baseURL: 'http://cms-api-v1.test/api',
    baseURL: 'https://cms-api-v1.bloomcu.com/api',
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
