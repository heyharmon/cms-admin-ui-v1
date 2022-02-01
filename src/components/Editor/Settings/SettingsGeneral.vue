<template>
    <div class="flex justify-between margin-bottom-sm">
        <h4 class="margin-0">General</h4>

        <!-- Controls -->
        <div class="flex align-middle">
            <!-- Replicate -->
            <button @click="handleReplicate(page)" class="app__action-icon reset margin-right-xxs" type="button" name="button">
                <svg class="icon" viewBox="0 0 24 24">
                    <g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><polyline points="8,8 8,1 23,1 23,16 16,16 "></polyline><polyline points="14,23 16,23 16,21 "></polyline><polyline points="1,21 1,23 3,23 "></polyline><polyline points="3,8 1,8 1,10 "></polyline><line x1="10" y1="23" x2="7" y2="23"></line><polyline points="14,8 16,8 16,10 "></polyline><line x1="10" y1="8" x2="7" y2="8"></line><line x1="1" y1="17" x2="1" y2="14"></line><line x1="16" y1="17" x2="16" y2="14"></line></g>
                </svg>
            </button>

            <!-- Archive -->
            <button @click="handleDestroy(page)" class="app__action-icon reset" type="button" name="button">
                <svg class="icon" viewBox="0 0 24 24">
                    <g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><path d="M20,9l-.867,12.142A2,2,0,0,1,17.138,23H6.862a2,2,0,0,1-1.995-1.858L4,9"></path><line x1="1" y1="5" x2="23" y2="5"></line><path data-cap="butt" d="M8,5V1h8V5" stroke-linecap="butt"></path></g>
                </svg>
            </button>
        </div>
    </div>

    <!-- Title -->
    <div class="margin-bottom-sm">
        <base-input
            v-model="page.title"
            label="Title"
            type="text"
        />
    </div>

    <!-- Status -->
    <base-select
        label="Status"
        :options="['Draft', 'Published']"
        v-model="page.status"
    />

    <!-- Slug -->
    <base-input
        v-model="page.slug"
        label="Slug"
        type="text"
    />

    <!-- Category -->
    <div class="margin-bottom-md">
        <label class="form-label margin-bottom-xxs">Category</label>
        <menu-nested
            :items="categories.data"
            @item-selected="onCategorySelected"
            class="padding-xxs border border-2 radius-md"
        />
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Components
import MenuNested from '@/components/menu/MenuNested.vue'
import BaseInput from '@/components/Form/BaseInput.vue'
import BaseSelect from '@/components/Form/BaseSelect.vue'

// Composables
import usePage from '@/composables/usePage'
import useCategory from '@/composables/useCategory'

export default {
    setup() {
        const router = useRouter()
        const { page, pageSaving, destroyPage, replicatePage } = usePage()
        const { categories, getCategories } = useCategory()
        const selectedCategory = ref()

        getCategories()

        function onCategorySelected(item) {
            page.value.category_id = item.id
            page.value.category.title = item.title
        }

        function handleReplicate(page) {
            replicatePage(page.id, page.is_blueprint)
            .then(response => {
                if (page.is_blueprint) {
                    router.push({ name: 'dashboard-page-blueprints' })
                } else {
                    router.push({ name: 'dashboard-pages' })
                }
            }).catch(error => {
                console.log(error)
            })
        }

        function handleDestroy(page) {
            destroyPage(page.id).then(response => {
                if (page.is_blueprint) {
                    router.push({ name: 'dashboard-page-blueprints' })
                } else {
                    router.push({ name: 'dashboard-pages' })
                }
            }).catch(error => {
                console.log(error)
            })
        }

        return {
            // Page
            page,
            pageSaving,

            // Categories
            categories,
            selectedCategory,
            onCategorySelected,

            // Controls
            handleReplicate,
            handleDestroy
        }
    },

    components: {
        MenuNested,
        BaseInput,
        BaseSelect
    }
}
</script>
