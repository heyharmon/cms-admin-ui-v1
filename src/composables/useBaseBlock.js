import { ref, computed } from 'vue'
import BaseBlockApi from '@/api/BaseBlockApi'

export default function useBaseBlock() {
    const blocks = ref([])
    const loading = ref(false)

    async function indexBlocks(params) {
        loading.value = true
        const response = await BaseBlockApi.index(params)
        blocks.value = response.data
        loading.value = false
    }

    return {
        baseBlocks: computed(() => blocks.value),
        baseBlocksLoading: computed(() => loading.value),
        getBaseBlocks: indexBlocks
    }
}
