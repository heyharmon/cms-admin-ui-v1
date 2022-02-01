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
        return apiClient.get('/layouts', { params: params })
    },

    store(layout = {}) {
        return apiClient.post('/layouts', layout)
    },

    show(id) {
        return apiClient.get('/layouts/' + id)
    },

    update(id, layout) {
        return apiClient.put('/layouts/' + id, layout)
    }
}
