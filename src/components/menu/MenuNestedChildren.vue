<template>
    <!-- Options -->
    <li
        v-for="(item, index) in items" :key="index"
        :class="openId == item.id ? 'nested-menu__item--expanded' : ''"
        class="nested-menu__item"
    >
        <a
            @click.prevent="handleItemSelected(item)"
            :class="selected == item ? 'nested-menu__link--current' : ''"
            class="nested-menu__link"
            href=""
        >
            <span class="nested-menu__text">{{ item.title }}</span>
        </a>

        <!-- Arrow -->
        <button
            v-if="item.children.length"
            @click="handleOpen(item.id)"
            class="reset nested-menu__sublist-control"
        >
            <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>

        <!-- Children -->
        <ul v-if="item.children.length" class="nested-menu__list">
            <menu-nested-children
                :items="item.children"
                :selected="selected"
                @item-selected="handleItemSelected"
            />
        </ul>
    </li>
</template>

<script>
import { ref } from 'vue'
import useToggleOpen from '@/composables/useToggleOpen'

export default {
    name: 'MenuNestedChildren',

    props: {
        items: {
            type: Array
        },
        selected: {
            type: Object
        }
    },

    emits: ['item-selected'],

    setup(props, { emit }) {
        // Handle toggling item open/close
        const { openId, handleOpen } = useToggleOpen()

        // Emit item up to parent
        function handleItemSelected(item) {
            emit('item-selected', item)
        }

        return {
            openId,
            handleOpen,
            handleItemSelected
        }
    }
};
</script>
