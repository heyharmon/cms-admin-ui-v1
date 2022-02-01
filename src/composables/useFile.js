import { ref, computed } from 'vue'
import FileApi from '@/api/FileApi'

const files = ref([])
const file  = ref()

export default function usePage() {
    const loading = ref(false)
    const saving  = ref(false)

    async function getFiles(params) {
        loading.value = true
        // pages.value = await PageApi.index(params)
        // loading.value = false

        const response = await FileApi.index(params)
        setTimeout(function() {
            files.value = response.data.data
            loading.value = false
        }, 200, this);
    }

    async function storeFile(file) {
        // TODO: This needs to catch errors
        const response = await FileApi.store(file)

        // Append new file to current files
        files.value = [response.data.data, ...files.value]
    }

    async function signFile(file) {
        return await FileApi.sign(file)
    }

    return {
        // States
        files:        computed(() => files.value),
        file:         computed(() => file.value),
        filesLoading: computed(() => loading.value),
        fileSaving:   computed(() => saving.value),

        // Methods
        getFiles,
        storeFile,
        signFile
    }
}
