<template>
    <loading-ghost v-if="loading" />

    <ul v-else class="item text-sm">
        <li
            v-for="(page, index) in pages"
            :key="index"
            class="item__wrapper flex padding-sm"
        >
            <!-- Item Left -->
            <router-link
                :to="{
                    name: 'page-edit',
                    params: { page: page.id }
                }"
                class="flex-grow margin-right-xs"
                style="text-decoration: none; color: inherit;"
            >
                <!-- Title & Category -->
                <div class="padding-y-xxxs">
                    <p class="text-md font-semibold">{{ page.title }}</p>
                    <p v-if="page.category" class="text-sm color-contrast-medium margin-top-xxs">Category: {{ page.category.title }}</p>
                </div>
            </router-link>

            <!-- Item Right -->
            <div class="flex items-center margin-left-auto">
                <!-- Replicate -->
                <button @click="handleReplicate(page)" class="app__action-icon reset margin-right-sm" type="button" name="button">
                    <svg class="icon" viewBox="0 0 24 24">
                        <g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><polyline points="8,8 8,1 23,1 23,16 16,16 "></polyline><polyline points="14,23 16,23 16,21 "></polyline><polyline points="1,21 1,23 3,23 "></polyline><polyline points="3,8 1,8 1,10 "></polyline><line x1="10" y1="23" x2="7" y2="23"></line><polyline points="14,8 16,8 16,10 "></polyline><line x1="10" y1="8" x2="7" y2="8"></line><line x1="1" y1="17" x2="1" y2="14"></line><line x1="16" y1="17" x2="16" y2="14"></line></g>
                    </svg>
                </button>

                <!-- Archive -->
                <button @click="handleDestroy(page)" class="app__action-icon reset margin-right-sm" type="button" name="button">
                    <svg class="icon" viewBox="0 0 24 24">
                        <g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><path d="M20,9l-.867,12.142A2,2,0,0,1,17.138,23H6.862a2,2,0,0,1-1.995-1.858L4,9"></path><line x1="1" y1="5" x2="23" y2="5"></line><path data-cap="butt" d="M8,5V1h8V5" stroke-linecap="butt"></path></g>
                    </svg>
                </button>

                <!-- Status Dot -->
                <div class="item__dot margin-left-sm" aria-hidden="true"></div>
            </div>
        </li>
    </ul>
</template>

<script>
// Composables
import usePage from '@/composables/usePage'

// Components
import LoadingGhost from '@/components/loading/LoadingGhost.vue'

export default {
    props: {
        pages: null,
        loading: false
    },

    setup() {
        const { getPages, destroyPage, replicatePage } = usePage()

        function handleReplicate(page) {
            replicatePage(page.id, page.is_blueprint)
            .then(response => {
                // TODO: Get the category from route
                // getPages({ category: response.data.category_id })
                getPages()
            }).catch(error => {
                console.log(error)
            })
        }

        function handleDestroy(page) {
            destroyPage(page.id).then(response => {
                getPages({ category: page.category.id })
            }).catch(error => {
                console.log(error)
            })
        }

        return {
            handleReplicate,
            handleDestroy
        }
    },

    components: {
        LoadingGhost
    }
};
</script>

<style media="screen">
:root {
    --item-figure-size: 30px;
}
</style>

<style lang="scss" scoped>
.item {
    position: relative;
    z-index: 1;
}

.item__wrapper {
    transition: .1s;
    border-bottom: 1px solid var(--color-contrast-low);

    &:hover {
        background-color: alpha(var(--color-contrast-higher), 0.03);
    }
}

.item__action {
    cursor: pointer;
}

.item__figure {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--item-figure-size);
  height: var(--item-figure-size);
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  > * {
    position: relative;
    z-index: 1;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before { // background
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    opacity: 0.15;
  }
}

.item__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-success);
  align-self: center;
  flex-shrink: 0;
}
</style>
