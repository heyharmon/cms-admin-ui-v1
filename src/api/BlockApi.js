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
    index(params) {
        return apiClient.get('/blocks', params)
    },

    store(block) {
        return apiClient.post('/blocks', block)
    },

    update(uuid, block) {
        return apiClient.put('/blocks/' + uuid, block)
    },

    destroy(uuid) {
        return apiClient.delete('/blocks/' + uuid)
    }
}
