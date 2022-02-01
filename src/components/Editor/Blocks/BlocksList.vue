<template>
    <div class="blocks-panel">
        <!-- Left column -->
        <div class="blocks-panel__column--left">

            <!-- Blocks wrapper -->
            <div class="flex flex-column">
                <!-- Blocks TODO: Extract block into component -->
                <draggable
                    v-model="blocks"
                    :group="{ name: 'blocks', pull: 'clone', put: false }"
                    :sort="false"
                    :clone="onClone"
                    :setData="modifyDragImage"
                    @start="onStart"
                    @end="onEnd"
                    class="app__block-card__list"
                    chosen-class="app__block-card__list--chosen"
                    ghost-class="app__block-card__list--ghost"
                    drag-class="app__block-card__list--drag"
                >
                    <div
                        v-for="block in blocks"
                        :key="block.id"
                        class="app__block-card"
                    >
                        <!-- Block title -->
                        <div class="app__block-card__title">
                            <p class="text-xs">{{ block.title }}</p>
                        </div>

                        <!-- Block image -->
                        <figure class="app__block-card__img">
                            <img :src="'/images/blocks/' + block.component + '.jpg'" alt="Block Image">
                        </figure>
                    </div>
                </draggable>
            </div>
        </div>

        <!-- Right column -->
        <div class="blocks-panel__column--right">
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { v4 as uuid } from 'uuid';
import { VueDraggableNext } from 'vue-draggable-next'

export default {
    components: {
        draggable: VueDraggableNext,
    },

    props: {
        blocks: {
            type: Array
        }
    },

    emits: ['event-dragstart', 'event-dragend'],

    setup(props, { emit }) {
        function onClone(original) {
            // Set uuid
            // TODO: Do we need UUID's now that blocks are not shared between layouts?
            const clone = {...original, uuid: uuid() }
            return clone
        }

        function onStart(event) {
            emit('event-dragstart')
            document.body.classList.toggle('utility__lock-scroll')
        }

        function onEnd(event) {
            emit('event-dragend')
        }

        let dragImage = new Image()
        dragImage.src = '/images/blocks/drag-image.png'
        function modifyDragImage(dataTransfer) {
            dataTransfer.setDragImage(dragImage, 0, 0)
        }

        return {
            onClone,
            onStart,
            onEnd,
            modifyDragImage
        }
    }
}
</script>

<style lang="scss" scoped>
.blocks-panel {
    display: flex;
    padding: var(--space-sm);
}

.blocks-panel__column--left {
    width: 100%;
    margin-right: var(--space-sm);
}

.blocks-panel__column--right {
    width: 250px;
}
</style>
