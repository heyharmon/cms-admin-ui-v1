import { ref, computed } from 'vue'
import { v4 as uuid } from 'uuid';
import PageApi from '@/api/PageApi'
import BlockApi from '@/api/BlockApi'

// Global states
const pages = ref([])
const page  = ref()
const loading = ref(false)
const saving  = ref(false)

export default function usePage() {
    // Local states
    // const loading = ref(false)
    // const saving  = ref(false)

    async function getPages(params) {
        loading.value = true
        // pages.value = await PageApi.index(params)
        // loading.value = false

        const response = await PageApi.index(params)
        setTimeout(function() {
            pages.value = response.data
            loading.value = false
        }, 200, this);
    }

    async function showPage(id) {
        loading.value = true
        const response = await PageApi.show(id)
        page.value = response.data
        loading.value = false
    }

    async function storePage(page) {
        loading.value = true
        // TODO: I think these need to catch errors
        const response = await PageApi.store(page)
        page.value = response
        loading.value = false
        return response
    }

    async function updatePage(page) {
        saving.value = true
        const response = await PageApi.update(page.id, page)

        setTimeout(function() {
            saving.value = false
            return response
        }, 500, this);
    }

    async function destroyPage(id) {
        const response = await PageApi.destroy(id)
    }

    async function replicatePage(id, is_blueprint) {
        saving.value = true
        const response = await PageApi.replicate(id, is_blueprint)
        saving.value = false
        return response
    }

    async function storePageBlock(block) {
        saving.value = true

        const response = await BlockApi.store({
            ...block,
            page_id: page.value.id
        })

        setTimeout(function() {
            saving.value = false
        }, 400, this);
    }

    async function updatePageBlock(block_uuid, field, payload) {
        saving.value = true

        // Find block
        const block = page.value.blocks.find((block) => block.uuid == block_uuid)

        // Update field
        block.content[field] = payload

        setTimeout(function() {
            saving.value = false
        }, 400, this);
    }

    async function destroyPageBlock(block_uuid) {
        saving.value = true

        // Filter out block in page
        const blocks = page.value.blocks.filter((block) => block.uuid !== block_uuid)
        page.value.blocks = blocks

        // Destroy block record
        const response = await BlockApi.destroy(block_uuid)

        setTimeout(function() {
            saving.value = false
        }, 400, this);
    }

    async function replicatePageBlock(block_uuid) {
        saving.value = true

        // Find block and index
        const block = page.value.blocks.find((block) => block.uuid == block_uuid)
        const index = page.value.blocks.findIndex((block) => block.uuid == block_uuid)

        // Duplicate block
        const newBlock = { ...block, uuid: uuid() }

        // Add block to page
        page.value.blocks.splice(index, 0, newBlock)

        // Persist block to databse
        const response = await BlockApi.store(newBlock)

        setTimeout(function() {
            saving.value = false
        }, 400, this);
    }

    async function reorderPageBlock(block_uuid) {
        saving.value = true

        updatePage(page.value)

        setTimeout(function() {
            saving.value = false
        }, 400, this);
    }

    return {
        // States
        pages:        computed(() => pages.value),
        page:         computed(() => page.value),
        pagesLoading: computed(() => loading.value),
        pageSaving:   computed(() => saving.value),

        // Page Methods
        getPages,
        showPage,
        storePage,
        updatePage,
        destroyPage,
        replicatePage,

        // Page Block Methods
        storePageBlock,
        updatePageBlock,
        destroyPageBlock,
        replicatePageBlock,
        reorderPageBlock
    }
}
