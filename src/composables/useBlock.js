import { ref, computed } from 'vue'
import BlockApi from '@/api/BlockApi'

export default function useBlock() {
    const blocks = ref([])
    const block = ref({})
    const loading = ref(false)

    /**
     * Index blocks
     *
     * @param  {Object} params
     */
    async function indexBlocks(params) {
        loading.value = true
        blocks.value = await BlockApi.index(params)
        loading.value = false
    }

    return {
        // States
        blocksLoading: computed(() => loading.value),
        blocks: computed(() => blocks.value),

        // Methods
        indexBlocks
    }
}
