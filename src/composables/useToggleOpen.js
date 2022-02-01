import { ref, computed } from 'vue'

export default function useToggleOpen() {
    const openId = ref()

    function handleOpen(id) {
        id == openId.value ? openId.value = '' : openId.value = id
    }

    return {
        openId: computed(() => openId.value),
        handleOpen
    }
}
