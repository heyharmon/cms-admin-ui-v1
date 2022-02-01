<template>
    <div class="blocks-menu">
        <ul>
            <li
                v-for="(item, index) in menu" :key="index"
                @click="activateMenu(item.category)"
                :class="activeMenu === item.category ? 'menu-item--active' : ''"
                class="menu-item"
            >
                {{ item.title }}
            </li>
        </ul>
    </div>

    <app-drawer :open="activeMenu !== null" @close="activeMenu = null" >
        <blocks-list :blocks="baseBlocks" @event-dragstart="activeMenu = null" @event-dragend="activeMenu = lastActiveMenu"/>
    </app-drawer>
</template>

<script>
import { ref } from 'vue'

// Components
import AppDrawer from '@/components/drawer/AppDrawer.vue'
import BlocksList from '@/components/Editor/Blocks/BlocksList.vue'

// Composables
import useBaseBlock from '@/composables/useBaseBlock'

export default {
    components: {
        AppDrawer,
        BlocksList
    },

    setup(props, context) {
        const activeMenu = ref(null)
        const lastActiveMenu = ref(null)
        const { baseBlocks, getBaseBlocks } = useBaseBlock()

        function activateMenu(cat) {
            // Cache this category
            // lastmenu-itemMenu.value = cat

            // Lock body scroll
            document.body.classList.add('utility__lock-scroll')

            // Update menu
            activeMenu.value = cat

            // Query blocks
            if (cat !== 'all') {
                getBaseBlocks('?category=' + cat)
            } else {
                getBaseBlocks('')
            }
        }

        // TODO: Consider hitting the blocks api for this list
        const menu = [
            {
                'title': 'All Blocks',
                'category': 'all'
            },
            {
                'title': 'Navigation',
                'category': 'navigation'
            },
            {
                'title': 'Heros',
                'category': 'heros'
            },
            {
                'title': 'Text',
                'category': 'text'
            },
            {
                'title': 'Features',
                'category': 'features'
            },
            {
                'title': 'Cards',
                'category': 'cards'
            },
            {
                'title': 'Testimonials',
                'category': 'testimonials'
            },
            {
                'title': 'Accordions',
                'category': 'accordions'
            },
            {
                'title': 'Galleries',
                'category': 'galleries'
            },
            {
                'title': 'Details',
                'category': 'details'
            },
            {
                'title': 'Process',
                'category': 'process'
            },
            {
                'title': 'Tables',
                'category': 'tables'
            },
            {
                'title': 'Footers',
                'category': 'footers'
            },
        ]

        return {
            activeMenu,
            activateMenu,
            lastActiveMenu,
            baseBlocks,
            menu
        }
    }
}
</script>

<style lang="scss" scoped>
.blocks-menu {
    position: relative;
    z-index: 6;

    .menu-item {
        font-size: 1.1rem;
        color: var(--color-contrast-higher);
        padding: var(--space-xxs);
        border-radius: var(--radius);
        cursor: pointer;

        &:hover {
            background-color: alpha(var(--color-contrast-higher), 0.05);
        }

        &--active {
            background-color: alpha(var(--color-primary), 0.1);
            color: var(--color-primary);
        }
    }
}
</style>
