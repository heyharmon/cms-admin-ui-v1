import { ref, computed } from 'vue'

export default function useToggle() {
     // Array of active element names
    const active = ref([])

    /**
     * Check if item is active
     *
     * @param  {String} item Name of element to check
     * @return {boolean} true/false
     */
    function isActive(item) {
        return active.value.includes(item)
    }

    /**
     * Toggle item
     *
     * @param  {String} item Name of element to be toggled
     */
    function toggle(item) {
        // Get index of item if present
        const itemIndex = active.value.indexOf(item)

        // Add item to active array or remove if already present in array
        itemIndex === -1 ? active.value.push(item) : active.value.splice(itemIndex, 1);
    }

    return {
        isActive,
        toggle
    }
}
