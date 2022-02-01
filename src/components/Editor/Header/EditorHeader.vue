<template>
    <header v-if="page" class="app__header">
        <!-- Left -->
        <div class="app__header__column app__header__column--left">
            <!-- Back button -->
            <router-link v-if="page.is_blueprint" :to="{ name: 'dashboard-page-blueprints' }" class="btn btn--sm bg border margin-right-sm">
                <svg class="icon margin-right-xs" viewBox="0 0 24 24"><g fill="none"><path d="M9 19l1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z" fill="#212121"></path></g></svg>
                Blueprints
            </router-link>
            <router-link v-else :to="{ name: 'dashboard-pages' }" class="btn btn--sm bg border margin-right-sm">
                <svg class="icon margin-right-xs" viewBox="0 0 24 24"><g fill="none"><path d="M9 19l1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z" fill="#212121"></path></g></svg>
                Pages
            </router-link>

            <!-- Page title & category -->
            <div class="flex flex-column">
                <!-- Title input -->
                <div v-if="editingTitle" class="page-title">
                    <input
                        v-model="page.title"
                        ref="pageTitle"
                        @blur="editingTitle = false; updatePage(page)"
                        @keyup.enter="$event.target.blur()"
                        class="title"
                        type="text"
                    >
                    <span @click="editingTitle = false">Save</span>
                </div>
                <!-- Title -->
                <p
                    v-else
                    @click="editingTitle = true; focusTitle()"
                    class="page-title text-sm"
                >
                    {{ page.title }}
                    <span>Edit</span>
                </p>

                <!-- Category -->
                <div class="page-category">
                    <p v-if="page.category" @click="toggle('settings')" class="category">
                        Category: {{ page.category.title }}
                        <span>Edit</span>
                    </p>
                </div>
            </div>
        </div>

        <!-- Center -->
        <div class="app__header__column app__header__column--center">

            <!-- Blueprint Badge-->
            <a v-if="page.is_blueprint" @click="toggle('settings')" href="#" class="badge badge--primary-light text-sm margin-right-sm">
                <svg class="icon margin-right-xxs" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-width="2" fill="none" stroke="#212121" stroke-linejoin="miter" stroke-miterlimit="10"><line data-cap="butt" x1="2" y1="8" x2="22" y2="8" stroke-linecap="butt" stroke="#212121"></line> <line data-cap="butt" x1="8" y1="8" x2="8" y2="22" stroke-linecap="butt" stroke="#212121"></line> <path d="M20,22H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2V20A2,2,0,0,1,20,22Z"></path></g></svg>
                Blueprint
            </a>

            <!-- Page Badge -->
            <a v-if="!page.is_blueprint" @click="toggle('settings')" href="#" class="badge badge--outline text-sm margin-right-sm">
                <svg class="icon margin-right-xxs" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="#212121" stroke="#212121" stroke-miterlimit="10"><polygon fill="none" stroke="#212121" points="2,7 12,1 22,7 12,13 "></polygon> <polyline data-color="color-2" fill="none" points=" 22,12 12,18 2,12 "></polyline> <polyline data-color="color-2" fill="none" points=" 22,17 12,23 2,17 "></polyline></g></svg>
                Page
            </a>

            <!-- Option: Build -->
            <!-- <div @click="openMenu = 'blocks'" class="editor-option">
                <svg class="icon" viewBox="0 0 16 16">
                    <g><path d="M6,0H1C0.4,0,0,0.4,0,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V1C7,0.4,6.6,0,6,0z"></path> <path data-color="color-2" d="M15,0h-5C9.4,0,9,0.4,9,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V1C16,0.4,15.6,0,15,0z"></path> <path data-color="color-2" d="M6,9H1c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1v-5C7,9.4,6.6,9,6,9z"></path> <path d="M15,9h-5c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1v-5C16,9.4,15.6,9,15,9z"></path></g>
                </svg>
                <span class="text-xs">Build</span>
            </div> -->

            <!-- Option: Templates -->
            <!-- <div class="editor-option">
                <svg class="icon" viewBox="0 0 16 16">
                    <g><path d="M15,0H1C0.4,0,0,0.4,0,1v2c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1V1C16,0.4,15.6,0,15,0z"></path> <path data-color="color-2" d="M3,6H1C0.4,6,0,6.4,0,7v8c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V7C4,6.4,3.6,6,3,6z"></path> <path d="M15,6H7C6.4,6,6,6.4,6,7v8c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V7C16,6.4,15.6,6,15,6z"></path></g>
                </svg>
                <span class="text-xs">Template</span>
            </div> -->

            <!-- Option: Write -->
            <!-- <div class="editor-option">
                <svg class="icon" viewBox="0 0 16 16">
                    <g><path d="M15.7,5.3l-5-5C10.5,0,10.1-0.1,9.7,0l-7,2C2.4,2.1,2.1,2.5,2,2.8L0.1,14.5l6-6c-0.2-0.7,0-1.4,0.5-1.9 c0.8-0.8,2-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8c-0.5,0.5-1.3,0.7-1.9,0.5l-6,6L13.2,14c0.4-0.1,0.7-0.3,0.8-0.7l2-7 C16.1,5.9,16,5.5,15.7,5.3z"></path></g>
                </svg>
                <span class="text-xs">Write</span>
            </div> -->

            <!-- Option: Comment -->
            <!-- <div class="editor-option">
                <svg class="icon" viewBox="0 0 16 16">
                    <g><path data-color="color-2" d="M15,4h-1v6c0,0.552-0.448,1-1,1H6.828L5,13h5l3,3v-3h2c0.552,0,1-0.448,1-1V5 C16,4.448,15.552,4,15,4z"></path> <path d="M1,0h10c0.552,0,1,0.448,1,1v7c0,0.552-0.448,1-1,1H6l-3,3V9H1C0.448,9,0,8.552,0,8V1C0,0.448,0.448,0,1,0z"></path></g>
                </svg>
                <span class="text-xs">Comment</span>
            </div> -->
        </div>

        <!-- Right -->
        <div class="app__header__column app__header__column--right">

            <!-- Status -->
            <div v-if="!page.is_blueprint" class="flex items-center margin-right-sm">
                <div class="status-dot margin-right-xxxs"></div>
                <span class="text-xs">Published</span>
            </div>

            <!-- Preview -->
            <router-link
                :to="{ name: 'preview', params: {company: $route.params.company, page: $route.params.page} }"
                class="btn btn--sm bg border margin-right-xs"
            >
                Preview
            </router-link>

            <!-- Save -->
            <!-- TODO: Extract into component -->
            <button
                @click="updatePage(page)"
                :class="pageSaving ? 'btn--loading' : ''"
                class="btn btn--sm btn--primary btn--preserve-width"
            >
                <span class="btn__content-a">Save</span>
                <span class="btn__content-b">
                    <svg class="icon icon--is-spinning" aria-hidden="true" viewBox="0 0 16 16"><title>Saving</title><g stroke-width="1" fill="currentColor" stroke="currentColor"><path d="M.5,8a7.5,7.5,0,1,1,1.91,5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                </span>
            </button>
        </div>
    </header>

    <!-- Settings Modal -->
    <!-- TODO: Move model into the setting component -->
    <app-modal
        v-if="isActive('settings')"
        :open="isActive('settings')"
        @close="toggle('settings')"
    >
        <settings/>
    </app-modal>
</template>

<script>
import { ref, computed, nextTick } from 'vue'

// Components
import AppModal from '@/components/modals/AppModal.vue'
import Settings from '@/components/Editor/Settings/Settings.vue'

// Composables
import useToggle from '@/composables/useToggle'
import usePage from '@/composables/usePage'

export default {
    setup() {
        const { isActive, toggle } = useToggle()
        const { page, pageSaving, updatePage } = usePage()

        // TODO: Either move this to it's own component or remove the funcitonality
        // TODO: If removing
        const pageTitle = ref(null)
        const focusTitle = async () => { await nextTick(); pageTitle.value.select() }
        const editingTitle = ref(false)

        return {
            isActive,
            toggle,

            page,
            pageSaving,
            updatePage,

            pageTitle,
            focusTitle,
            editingTitle,
        }
    },

    components: {
        AppModal,
        Settings
    },
};
</script>

<style lang="scss" scoped>
/**
 * Header
 *
 */
.editor-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 var(--space-xs);
    color: var(--color-contrast-medium);
    transition: .3s;
    cursor: pointer;

    .icon {
        width: 16px;
        height: 16px;
        margin-bottom: var(--space-xxxs);
        fill: var(--color-contrast-medium);
        transition: .3s;
    }

    &:hover {
        color: var(--color-contrast-high);

        .icon {
            fill: var(--color-contrast-high);
        }
    }
}

/**
 * Left
 *
 */
.page-title,
.page-category {
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
        visibility: hidden;
        font-size: var(--text-xs);
        color: var(--color-primary);
        margin-left: var(--space-xxs);
    }

    &:hover {
        span {
            visibility: visible;
        }
    }
}

input.title {
    border: none;
    border-bottom: 1px solid var(--color-primary);

    &:focus {
        outline: none;
    }
}

.page-category {
    .category {
        font-size: var(--text-xs);
        color: var(--color-contrast-medium);
        padding-top: var(--space-xxxxs);

        span {
            font-size: var(--text-sm);
        }
    }
}

/**
 * Right
 *
 */
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-success);
  align-self: center;
  flex-shrink: 0;
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

/**
 * Badge
 *
 */
 .badge {
   @include reset; // reset button native style
   display: inline-flex;
   text-decoration: none;
   align-items: center;
   background-color: var(--color-contrast-low);
   padding: var(--space-xxxs) var(--space-sm);
   border-radius: 50em;
   @include fontSmooth;
 }

 .badge--outline {
   background-color: transparent;
   box-shadow: inset 0 0 0 1px alpha(var(--color-contrast-higher), 0.25);
 }

 .badge--primary {
   background-color: var(--color-primary);
   color: var(--color-white);
 }

 .badge--primary-light {
  background-color: alpha(var(--color-primary), 0.2);
  color: var(--color-contrast-higher);
}

.badge--success {
  background-color: var(--color-success);
  color: var(--color-white);
}
</style>
