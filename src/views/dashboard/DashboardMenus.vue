<template>
    <layout-sidebar>
        <!-- Header -->
        <div class="flex flex-wrap items-center justify-between height-lg margin-bottom-md padding-bottom-lg border-bottom">
            <h1 class="text-lg">Menus</h1>
            <div class="flex items-center gap-xs">
                <button class="btn btn--primary btn--sm">New Menu</button>
            </div>
        </div>

        <!-- Menus -->
        <div class="app__module">
            <div class="app__module-column--right">
                <table-basic :items="menus" :loading="false" />
            </div>
        </div>

        <!-- <div v-else class="padding-lg text-component bg-contrast-lower radius-lg">
            <h4>Create your first menu</h4>
            <p class="text-sm">You currently have no menus. Create one to get started.</p>
            <button class="btn btn--primary btn--sm">New Menu</button>
        </div> -->
    </layout-sidebar>
</template>
<script>
// Layout
import LayoutSidebar from '@/layouts/LayoutSidebar.vue'

// Components
import TableBasic from '@/components/table/TableBasic.vue'

export default {
    setup() {
        const menus = [
            // { id: 1, title: 'Main Navigation' },
            // { id: 2, title: 'Footer' },
            // { id: 3, title: 'Blog Categories Sidebar' },
            // { id: 4, title: 'Help Center Sidebar' }
        ]

        return {
            menus
        }
    },

    components: {
        LayoutSidebar,
        TableBasic
    },
}
</script>
