<template>
    <div class="header-page-settings max-width-lg">
        <!-- Left column -->
        <div class="column-left utility__scrollable">
            <div class="column-left__content flex flex-column justify-between height-100%">
                <div>
                    <h4 class="margin-bottom-sm">Settings</h4>
                    <ul>
                        <li
                            v-for="item in menu"
                            @click="activeMenu = item"
                            :class="activeMenu === item ? 'menu-item--active' : ''"
                            class="menu-item"
                        >
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <!-- Save -->
                <!-- TODO: Extract into component -->
                <button
                    @click="updatePage(page)"
                    :class="pageSaving ? 'btn--loading' : ''"
                    class="btn btn--primary btn--preserve-width width-100%"
                >
                    <span class="btn__content-a">Save</span>
                    <span class="btn__content-b">
                        <svg class="icon icon--is-spinning" aria-hidden="true" viewBox="0 0 16 16"><title>Saving</title><g stroke-width="1" fill="currentColor" stroke="currentColor"><path d="M.5,8a7.5,7.5,0,1,1,1.91,5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                    </span>
                </button>
            </div>
        </div>

        <!-- Right column -->
        <div v-if="page" class="column-right utility__scrollable">
            <settings-general v-if="activeMenu === 'General'" />
            <settings-blueprint v-if="activeMenu === 'Blueprint'" />
            <settings-search v-if="activeMenu === 'SEO'" />
            <settings-social-media v-if="activeMenu === 'Social Media'" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

// Components
import SettingsGeneral from '@/components/Editor/Settings/SettingsGeneral'
import SettingsBlueprint from '@/components/Editor/Settings/SettingsBlueprint'
import SettingsSearch from '@/components/Editor/Settings/SettingsSearch'
import SettingsSocialMedia from '@/components/Editor/Settings/SettingsSocialMedia'

// Composables
import usePage from '@/composables/usePage'
import useCategory from '@/composables/useCategory'

export default {
    setup() {
        const menu = ['General', 'Blueprint', 'SEO', 'Social Media']
        const activeMenu = ref('General')

        const { page, pageSaving, updatePage } = usePage()

        const { categories, getCategories } = useCategory()
        const selectedCategory = ref()

        getCategories()

        function onCategorySelected(item) {
            selectedCategory.value = item.id
        }

        return {
            // Settings menu
            menu,
            activeMenu,

            // Page
            page,
            pageSaving,
            updatePage,

            // Categories
            categories,
            selectedCategory,
            onCategorySelected,
        }
    },

    components: {
        SettingsGeneral,
        SettingsBlueprint,
        SettingsSearch,
        SettingsSocialMedia
    }
}
</script>

<style lang="scss" scoped>
.header-page-settings {
    display: flex;
    min-height: 90vh;
    max-height: 90vh;

    .column-left {
        width: 300px;
        min-width: 300px;
        border-radius: var(--radius-md) 0 0 var(--radius-md);
        background-color: var(--color-contrast-lower);

        &__content {
            padding: var(--space-md);
        }

        .menu-item {
            margin-bottom: var(--space-xxxs);
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

    .column-right {
        width: 700px;
        min-width: 700px;
        padding: var(--space-md) var(--space-lg);
    }
}

/**
 * Save Button Animation
 *
 */
.btn .btn__content-a {
  display: inline-flex;
}

.btn .btn__content-b {
  display: none;
}

.btn__content-a, .btn__content-b {
  align-items: center;
}

.btn--loading {
  .btn__content-a {
    display: none;
  }

  .btn__content-b {
    display: inline-block; // fallback
    display: inline-flex;
  }
}

/* preserve button width when switching from state A to state B */
.btn--preserve-width {
  .btn__content-b {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
  }

  &.btn--loading .btn__content-a {
    display: inline-block; // fallback
    display: inline-flex;
    visibility: hidden;
  }
}
</style>
