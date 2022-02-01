<template>
    <!-- Header -->
    <editor-header />

    <!-- Editor -->
    <div v-if="block" class="editor-body utility__scrollable">
        <component :is="block.component" :block="block" />
    </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Composables
import usePage from '@/composables/usePage'

// Components
import EditorHeader from '@/components/Editor/Editor/EditorHeader.vue'

// Editors
import FeatureDefault from '@/components/Editor/Editor/Editors/feature-default.vue'
import HeroDefault from '@/components/Editor/Editor/Editors/hero-default.vue'
import TextOneColumn from '@/components/Editor/Editor/Editors/text-one-column.vue'
import TextTwoColumns from '@/components/Editor/Editor/Editors/text-two-columns.vue'
import TextThreeColumns from '@/components/Editor/Editor/Editors/text-three-columns.vue'

export default {
    async setup() {
        const route = useRoute()
        const { page } = usePage()

        const block = await computed(() => {
            return page.value.blocks.find(
                block => block.uuid === route.params.uuid
            )
        })

        return {
            block
        }
    },

    components: {
        EditorHeader,

        // Editors
        FeatureDefault,
        HeroDefault,
        TextOneColumn,
        TextTwoColumns,
        TextThreeColumns
    }
}
</script>
