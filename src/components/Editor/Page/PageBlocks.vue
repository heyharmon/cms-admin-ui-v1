<template>
    <!-- Draggable list -->
    <draggable
        v-if="page"
        v-model="page.blocks"
        :group="{ name: 'blocks', pull: false, put: 'blocks' }"
        :animation="400"
        :setData="modifyDragImage"
        @change="change"
        chosen-class="blocks__chosen"
        ghost-class="blocks__ghost"
        drag-class="blocks__drag"
        class="blocks"
    >
        <!-- <transition-group type="transition" name="block"> -->

            <block-base
                v-for="block in page.blocks"
                :key="block.uuid"
                :editing="$route.params.uuid === block.uuid"
                :id="block.uuid"
                :block="block"
            />

        <!-- </transition-group> -->
    </draggable>
</template>

<script>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { VueDraggableNext } from 'vue-draggable-next'

// Composables
import usePage from '@/composables/usePage'

// Components
import BlockBase from '@/components/Block/BlockBase.vue'

export default {
    async setup() {
        const route = useRoute()
        const { page, storePageBlock, reorderPageBlock } = usePage()

        function change(event) {
            if (event.added) {
                storePageBlock(event.added.element)
            }
            if (event.moved) {
                reorderPageBlock()
            }
        }

        let dragImage = new Image()
        dragImage.src = '/images/blocks/drag-image.png'
        function modifyDragImage(dataTransfer) {
            dataTransfer.setDragImage(dragImage, 0, 0)
        }

        // function modifyDragImage(dataTransfer, block) {
        //     // https://kryogenix.org/code/browser/custom-drag-image.html
        //     const clone = block.cloneNode(true)
        //     clone.style.width = '100px'
        //     clone.style.position = "absolute"
        //     clone.style.top = "0px"
        //     clone.style.left = "0px"
        //     document.appendChild(clone);
        //     dataTransfer.setDragImage(clone, 0, 0)
        // }

        // When editing a block, scroll to it
        watch(() => route.params.uuid, (uuid) => {
            if (!uuid) return
            document.getElementById(route.params.uuid).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        })

        return {
            page,
            change,
            modifyDragImage
        }
    },

    components: {
        draggable: VueDraggableNext,
        BlockBase
    }
}
</script>

<style lang="scss" scoped>
.blocks {
    // &__chosen {
    //     border: 2px solid var(--color-primary);
    // }

    &__ghost {
        border: 2px solid var(--color-primary);
    }

    &__drag {
        border: 2px solid var(--color-primary);
    }
}
</style>
