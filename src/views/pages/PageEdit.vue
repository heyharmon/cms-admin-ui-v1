<template>
    <!-- TODO: Extract editor layout into a layout -->
    <!-- TODO: Create a design mode template, this scales to other modes like writing -->
    <!-- <loading-ghost v-if="loading" class="padding-lg"/> -->
    <!-- <div v-if="loading"></div> -->
    <Suspense>
        <!-- <template #default> -->
            <div class="editor">
                <editor-header />

                <div class="editor-wrapper">

                    <!-- Left -->
                    <!-- <transition name="fade" mode="out-in"> -->
                        <div v-if="$route.name == 'page-edit'" style="width: 12%;" class="_outline editor-wrapper__left utility__scrollable">
                            <outline />
                        </div>
                        <div v-else-if="$route.name == 'page-edit-block' || $route.name == 'page-edit-block-wiki'" style="width: 25%;" class="_editor editor-wrapper__left utility__scrollable">
                            <editor />
                        </div>
                        <div v-else-if="$route.name == 'page-edit-block-files'" style="width: 25%;" class="_editor editor-wrapper__left utility__scrollable">
                            <file-picker />
                        </div>
                    <!-- </transition> -->

                    <!-- Center -->
                    <main class="editor-wrapper__center utility__scrollable">
                        <wiki v-if="$route.name == 'page-edit-block-wiki'"/>
                        <page-blocks v-else/>
                    </main>

                    <!-- Right -->
                    <!-- <transition name="fade"> -->
                        <div v-if="$route.name == 'page-edit'" class="editor-wrapper__right utility__scrollable">
                            <blocks-menu />
                        </div>
                    <!-- </transition> -->
                </div>
            </div>
        <!-- </template> -->

        <!-- <template #fallback>
            <loading-ghost class="padding-lg"/>
        </template> -->
    </Suspense>
</template>

<script>
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import { VueDraggableNext } from 'vue-draggable-next'

// Composables
import usePage from '@/composables/usePage'

// Components
import LoadingGhost from '@/components/loading/LoadingGhost.vue'
import EditorHeader from '@/components/Editor/Header/EditorHeader.vue'
import Outline from '@/components/Editor/Outline/Outline.vue'
import FilePicker from '@/components/Editor/Files/FilePicker.vue'
import Editor from '@/components/Editor/Editor/Editor.vue'
import Wiki from '@/components/Editor/Wiki/Wiki.vue'
import PageBlocks from '@/components/Editor/Page/PageBlocks.vue'
import BlocksMenu from '@/components/Editor/Blocks/BlocksMenu.vue'

export default {
    // Need this since component does not have a root node
    // Silenzes Vue warning about extraneous non-props
    inheritAttrs: false,

    setup() {
        const route = useRoute()
        const { page, showPage, updatePage } = usePage()

        // Load page
        showPage(route.params.page)

        // Catch navigation out of block editor
        onBeforeRouteLeave((to, from, next) => {
            if (from.name === 'page-edit-block') {
                // TODO: Instead of updating the whole page
                // Only update the block that was being edited
                updatePage(page.value)
            }
            next()
        })

        return {
            page
        }
    },

    components: {
        draggable: VueDraggableNext,
        LoadingGhost,
        EditorHeader,
        Outline,
        FilePicker,
        Editor,
        Wiki,
        PageBlocks,
        BlocksMenu
    }
}
</script>

<style lang="scss" scoped>
// Fade
// .fade-enter-active,
// .fade-leave-active {
//     transition: width 0s;
// }
//
// .fade-enter-from,
// .fade-leave-to {
//     width: 0;
// }

// Slide-fade
// .slide-fade-enter-active {
//   transition: all .5s ease-out;
// }
//
// .slide-fade-leave-active {
//   transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
//
// .slide-fade-enter-from,
// .slide-fade-leave-to {
//   transform: translateX(20px);
//   opacity: 0;
// }

.editor {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: var(--color-contrast-lower);
}

.editor-wrapper {
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    margin: var(--space-sm) var(--space-md);
    min-height: 0;

    &__left {
        padding-right: var(--space-md);
    }

    &__center {
        width: 78%;

        // Flexbox
        display: flex;
        flex-direction: column;

        // Style
        border-radius: var(--radius-md);
        background-color: var(--color-white, white);
    	box-shadow: var(--shadow-sm);
    }

    &__right {
        width: 10%;
        padding-left: var(--space-xs);
    }
}
</style>
