import { ref, computed } from 'vue'
import PageBlueprintApi from '@/api/PageBlueprintApi'

const blueprints   = ref([])

export default function usePageBlueprint() {
    const loading = ref(false)

    async function getBlueprints(params) {
        loading.value = true

        const response = await PageBlueprintApi.index(params)
        setTimeout(function() {
            blueprints.value = response.data
            loading.value = false
        }, 200, this);
    }

    return {
        // States
        blueprints: computed(() => blueprints.value),
        blueprintsLoading: computed(() => loading.value),

        // Methods
        getBlueprints
    }
}
