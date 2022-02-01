import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://cms.test/api',
    // baseURL: 'https://cms-api.bloomcu.com/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    index(params = {}) {
        return apiClient.get('/organizations/redwood/page-blueprints', { params: params })
    }
}
