<template>
    <div class="page-create">
        <header class="app__header">
            <!-- Left -->
            <div class="app__header__column app__header__column--left">
                <!-- Back button -->
                <router-link :to="{ name: 'dashboard-pages' }" class="btn btn--sm bg border margin-right-sm">
                    <svg class="icon margin-right-xs" viewBox="0 0 24 24"><g fill="none"><path d="M9 19l1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z" fill="#212121"></path></g></svg>
                    Pages
                </router-link>
            </div>

            <!-- Center -->
            <div class="app__header__column app__header__column--center gap-sm"></div>

            <!-- Right -->
            <div class="app__header__column app__header__column--right"></div>
        </header>

        <div class="app__body max-width-adaptive-xl">
            <!-- Subheader -->
            <div class="flex flex-wrap items-center justify-between height-lg margin-bottom-md padding-bottom-lg border-bottom">
                <h2 class="text-lg">Select a Blueprint</h2>
            </div>

            <div class="app__module">
                <!-- Categories -->
                <div class="app__module-column--left">
                    <menu-nested :items="categories.data" @item-selected="filterByCategory" />
                </div>

                <!-- Blueprints -->
                <div class="app__module-column--right">
                    <div class="grid gap-md">
                        <app-card
                            v-for="blueprint in blueprints"
                            :key="blueprint.id"
                            :title="blueprint.title"
                            image="/images/layouts/thumb-layout.jpg"
                            @onPreview="modalOpen = true"
                            @onSelect="storePageFromBlueprint(blueprint)"
                            class="col-4@md"
                        />
                    </div>
                </div>
            </div>
        </div>

        <!-- Preview modal -->
        <app-modal
            :open="modalOpen === true"
            @close="modalOpen = false"
        >
            <layout-preview @close="modalOpen = false"/>
        </app-modal>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

// Components
import MenuNested from '@/components/menu/MenuNested.vue'
import AppFilterTabs from '@/components/tabs/AppFilterTabs.vue'
import AppCard from '@/components/cards/AppCard.vue'
import AppModal from '@/components/modals/AppModal.vue'
import LayoutPreview from '@/components/Layout/LayoutPreview.vue'

// Composables
import usePageBlueprint from '@/composables/usePageBlueprint'
import useCategory from '@/composables/useCategory'
import usePage from '@/composables/usePage'

export default {
    setup() {
        const router = useRouter()
        const modalOpen = ref(false)

        const { blueprints, blueprintsLoading, getBlueprints } = usePageBlueprint()
        const { categories, getCategories } = useCategory()
        const { storePage } = usePage()

        getCategories()
        getBlueprints()

        function filterByCategory(cat) {
            // TODO: Category selected is not checked against category being queried
            // TEST: Click a category twice, it's not disabled
            let query = cat ? { category: cat.id } : null
            getBlueprints(query)
        }

        function storePageFromBlueprint(blueprint) {
            storePage({
                title: blueprint.title,
                category_id: blueprint.category.id,
                blocks: blueprint.blocks,
                company_id: 1,
                is_blueprint: 0,
                type_id: 75 // Page
            }).then(response => {
                router.push({ name: 'page-edit', params: { company: 1, page: response.data.id } })
            }).catch(error => {
                console.log(error)
            })
        }

        return {
            modalOpen,
            categories,
            filterByCategory,
            blueprints,
            storePageFromBlueprint
        }
    },

    components: {
        MenuNested,
        AppFilterTabs,
        AppCard,
        AppModal,
        LayoutPreview
    },
};
</script>

<style lang="scss" scoped>
.page-create {
    background-color: var(--color-contrast-lower);
    min-height: 100vh;
}

.search-form {
    background-color: var(--color-contrast-lower);
}
/* --------------------------------
App Body
-------------------------------- */
.app__body {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: relative;
    padding: var(--space-md) var(--space-md) var(--space-md) 0;
    min-height: calc(100vh - var(--app-ui-header-height));
    z-index: 1;
}
</style>
