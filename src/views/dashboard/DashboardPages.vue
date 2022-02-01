<template>
    <layout-sidebar>
        <!-- Header -->
        <div class="flex flex-wrap items-center justify-between height-lg margin-bottom-md padding-bottom-lg border-bottom">
            <h1 class="text-lg">Pages</h1>
            <div class="flex items-center gap-xs">
                <router-link :to="{ name: 'page-create' }" class="btn btn--primary btn--sm">New Page</router-link>
            </div>
        </div>

        <!-- Pages -->
        <div class="app__module">
            <div class="app__module-column--left">
                <menu-nested
                    :items="categories.data"
                    @item-selected="filterByCategory"
                />
            </div>
            <div class="app__module-column--right">
                <pages-table
                    :pages="pages"
                    :loading="pagesLoading"
                />
            </div>
        </div>

        <!-- <div v-else class="padding-lg text-component bg-contrast-lower radius-lg">
            <h4>Create your first page</h4>
            <p class="text-sm">You currently have no pages. We've got dozens of Blueprints to get you started!</p>
            <router-link :to="{ name: 'page-create' }" class="btn btn--primary btn--sm margin-right-xs">New Page</router-link>
            <router-link to="#" class="btn bg-white btn--sm">Import Pages</router-link>
        </div> -->
    </layout-sidebar>
</template>

<script>
// Layout
import LayoutSidebar from '@/layouts/LayoutSidebar.vue'

// Components
import MenuNested from '@/components/menu/MenuNested.vue'
import PagesTable from '@/components/Dashboard/PagesTable.vue'

// Composables
import usePage from '@/composables/usePage'
import useCategory from '@/composables/useCategory'

export default {
    setup() {
        const { pages, pagesLoading, getPages } = usePage()
        const { categories, getCategories } = useCategory()

        getPages()
        getCategories()

        function filterByCategory(cat) {
            // TODO: Category selected is not checked against category being queried
            // TEST: Click a category twice, it's not disabled
            let query = cat ? { category: cat.id } : null
            getPages(query)
        }

        return {
            pages,
            pagesLoading,
            categories,
            filterByCategory
        }
    },

    components: {
        LayoutSidebar,
        MenuNested,
        PagesTable
    },
};
</script>
