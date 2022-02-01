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

    /**
     * List files
     *
     * @param Object params [Key value params to sort by]
     */
    index(params) {
        return apiClient.get('/organizations/redwood/files', { params: params })
    },

    /**
     * Store a new file
     *
     * @param Object file [Properties to create file from]
     */
    store(file) {
        return apiClient.post('/organizations/redwood/files', file)
    },

    /**
     * Create a signed upload request
     *
     * This signed file object is used to post a file upload to AWS S3
     * @param Object request [name, extension, size]
     */
    sign(request) {
        return apiClient.post('/organizations/redwood/files/sign', request)
    },
}
