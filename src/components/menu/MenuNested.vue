<template>
    <nav class="nested-menu">
        <!-- Menu Label -->
        <!-- <div class="nested-menu__label margin-bottom-sm">
            <span class="text-sm color-contrast-medium">Categories</span>
        </div> -->

        <!-- Children -->
        <ul class="nested-menu__list">

            <!-- "All" option -->
            <li class="nested-menu__item">
                <a
                    @click.prevent="activateMenu(null)"
                    :class="!selected ? 'nested-menu__link--current' : ''"
                    class="nested-menu__link"
                    href=""
                >
                    <span class="nested-menu__text">All</span>
                </a>
            </li>

            <!-- Options -->
            <menu-nested-children :items="items" :selected="selected" @item-selected="activateMenu" />
        </ul>
    </nav>
</template>

<script>
import { ref } from 'vue'
import LoadingGhost from '@/components/loading/LoadingGhost.vue'
import MenuNestedChildren from '@/components/menu/MenuNestedChildren.vue'

export default {
    name: 'MenuNested',

    props: {
        items: {
            type: Array
        }
    },

    emits: ['item-selected'],

    setup(props, { emit }) {
        const selected = ref(null)

        function activateMenu(item) {
            item == selected.value ? selected.value = null : selected.value = item
            emit('item-selected', item)
        }

        return {
            activateMenu,
            selected
        }
    },

    components: {
        LoadingGhost,
        MenuNestedChildren
    }
};
</script>

<style media="screen">
:root {
    /* List items */
    /* Height of each list item (navigation links) */
    --nested-menu-list-item-height: 36px;
    /* Item horizontal padding */
    --nested-menu-list-item-padding-x: 0.7em;

    /* Sublist Control Arrow */
    /* Button size */
    --nested-menu-sublist-control-size: 36px;
    /* Icon size */
    --nested-menu-sublist-control-icon-size: 16px;
}
</style>

<style lang="scss">
.nested-menu {}

// Children
.nested-menu__list .nested-menu__list {
    display: none; // hide children

    // Child item
    .nested-menu__item {
        padding-left: var(--nested-menu-list-item-padding-x);
    }
}

.nested-menu__item {
    position: relative;
}

.nested-menu__item--expanded > .nested-menu__list {
    display: block;
}

.nested-menu__item--expanded > .nested-menu__sublist-control .icon {
    transform: rotate(90deg);
}

.nested-menu__link {
    display: flex;
    align-items: center;
    height: var(--nested-menu-list-item-height);
    margin-bottom: 8px;
    padding-left: var(--nested-menu-list-item-padding-x);
    text-decoration: none;
    color: var(--color-contrast-high);
    border-radius: var(--radius-md);
    transition: .1s;

    &:hover {
        background-color: alpha(var(--color-contrast-higher), 0.05);
    }
}

.nested-menu__link--current {
    background-color: alpha(var(--color-primary), 0.1);
    color: var(--color-primary);
}

// Labels
.nested-menu__text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: var(--space-xxs);
}

// Arrow
.nested-menu__sublist-control {
    display: block;
    width: var(--nested-menu-sublist-control-size);
    height: var(--nested-menu-sublist-control-size);
    border-radius: var(--radius-md) !important;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    transition: .1s;

    .icon {
        display: block;
        fill: none;
        width: var(--nested-menu-sublist-control-icon-size);
        height: var(--nested-menu-sublist-control-icon-size);
        margin: auto;
        transition: transform .2s;
    }

    &:hover {
        background-color: alpha(var(--color-contrast-medium), 0.15);
    }

    &:focus {
        outline: none;
    }
}

.nested-menu__divider {
    width: 100%;
    height: 1px;
    background-color: var(--color-contrast-lower);
}
</style>
