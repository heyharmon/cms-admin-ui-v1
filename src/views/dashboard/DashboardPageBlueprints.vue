<template>
    <layout-sidebar>
        <!-- Header -->
        <div class="flex flex-wrap items-center justify-between height-lg margin-bottom-md padding-bottom-lg border-bottom">
            <h1 class="text-lg">Blueprints</h1>
            <div class="flex items-center gap-xs">
                <button @click="storeBlueprint()" class="btn btn--primary btn--sm">New Blueprint</button>
            </div>
        </div>

        <!-- Bleprints -->
        <div class="app__module">
            <div class="app__module-column--left">
                <menu-nested
                    :items="categories.data"
                    @item-selected="filterByCategory"
                />
            </div>
            <div class="app__module-column--right">
                <blueprints-table
                    :pages="blueprints"
                    :loading="blueprintsLoading"
                />
            </div>
        </div>
    </layout-sidebar>
</template>

<script>
import { useRouter } from 'vue-router'

// Layout
import LayoutSidebar from '@/layouts/LayoutSidebar.vue'

// Components
import MenuNested from '@/components/menu/MenuNested.vue'
import BlueprintsTable from '@/components/Dashboard/BlueprintsTable.vue'

// Composables
import usePageBlueprint from '@/composables/usePageBlueprint'
import useCategory from '@/composables/useCategory'
import usePage from '@/composables/usePage'

export default {
    setup() {
        const router = useRouter()

        const { blueprints, blueprintsLoading, getBlueprints } = usePageBlueprint()
        const { categories, getCategories } = useCategory()
        const { storePage } = usePage()

        getBlueprints()
        getCategories()

        function filterByCategory(cat) {
            // TODO: Category selected is not checked against category being queried
            // TEST: Click a category twice, it's not disabled
            let query = cat ? { category: cat.id } : null
            getBlueprints(query)
        }

        function storeBlueprint() {
            storePage({
                page: {
                    title: 'New Blueprint',
                    is_blueprint: 1,
                    company_id: 1,
                    category_id: 87, // Uncategorized
                    type_id: 75, // Page
                }
            }).then(response => {
                router.push({ name: 'page-edit', params: { company: 1, page: response.data.id } })
            }).catch(error => {
                console.log(error)
            })
        }

        return {
            blueprints,
            blueprintsLoading,
            storeBlueprint,

            categories,
            filterByCategory
        }
    },

    components: {
        LayoutSidebar,
        MenuNested,
        BlueprintsTable
    },
};
</script>
