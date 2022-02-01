import axios from 'axios'

const apiClient = axios.create({
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    /**
     * Upload a file
     *
     * Upload a file to AWS S3 using signed upload request
     * @param String url [S3 bucket url]
     * @param Object request [Signed upload request object]
     */
    upload(url, request) {
        return apiClient.post(url, request)
    },
}
