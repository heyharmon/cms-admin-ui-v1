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

    /**
     * Store a new page
     *
     * @param Object params [Key value params to sort by]
     */
    index(params) {
        return apiClient.get('/organizations/redwood/pages', { params: params })
    },

    /**
     * Store a new page
     *
     * @param Object page [Properties to create page from]
     */
    store(page) {
        return apiClient.post('/organizations/redwood/pages', page)
    },

    /**
     * Show a page
     *
     * @param Integer id [Id of the page you want to show]
     */
    show(id) {
        return apiClient.get(`/organizations/redwood/pages/${id}`)
    },

    /**
     * Update a page
     *
     * @param Integer id   [Id of the page you want to update]
     * @param Object  page [Properties to update page with]
     */
    update(id, page) {
        return apiClient.put(`/organizations/redwood/pages/${id}`, page)
    },

    /**
     * Destroy a page
     *
     * @param Integer id [Id of the page you want to destroy]
     */
    destroy(id) {
        return apiClient.delete(`/organizations/redwood/pages/${id}`)
    },

    /**
     * Replicate a page
     *
     * @param Integer id           [Id of the page you want to replicate]
     * @param Boolean is_blueprint [0 or 1 to specify page as blueprint or not]
     */
    replicate(id, is_blueprint) {
        return apiClient.post(`/organizations/redwood/pages/${id}/replicate`, {
            is_blueprint: is_blueprint
        })
    },
}
