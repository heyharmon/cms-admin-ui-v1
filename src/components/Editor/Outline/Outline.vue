<template>
    <div class="blocks-outline">
        <draggable
            v-if="page"
            v-model="page.blocks"
            :group="{ name: 'outline', pull: false, put: 'blocks' }"
            :animation="400"
            @change="change"
            class="app__block-card__list"
            chosen-class="app__block-card__list--chosen"
            ghost-class="app__block-card__list--ghost"
            drag-class="app__block-card__list--drag"
        >
            <transition-group type="transition" name="thumbnail">
                <div
                    v-for="block in page.blocks"
                    :key="block.uuid"
                    @click="scrollToElement(block.uuid)"
                    class="app__block-card"
                >
                    <div class="app__block-card__title">
                        <p class="text-xs">{{ block.title }}</p>
                    </div>
                    <figure class="app__block-card__img">
                        <img :src="'/images/blocks/' + block.component + '.jpg'" alt="Block Image">
                    </figure>
                </div>
            </transition-group>
        </draggable>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { VueDraggableNext } from 'vue-draggable-next'

// Composables
import usePage from '@/composables/usePage'
import { scrollToElement } from '@/composables/useScroll'

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

        return {
            page,
            change,
            scrollToElement
        }
    },

    components: {
        draggable: VueDraggableNext
    }
}
</script>
