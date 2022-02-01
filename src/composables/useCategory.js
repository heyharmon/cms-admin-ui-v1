import { ref, computed } from 'vue'
import CategoryApi from '@/api/CategoryApi'

export default function useCategory() {
    const categories = ref([])
    const loading = ref(false)

    async function getCategories() {
        loading.value = true
        // categories.value = await CategoryApi.index()
        // loading.value = false

        const response = await CategoryApi.index()
        setTimeout(function() {
            categories.value = response
            loading.value = false
        }, 200, this);
    }

    return {
        categories: computed(() => categories.value),
        getCategories
    }
}
