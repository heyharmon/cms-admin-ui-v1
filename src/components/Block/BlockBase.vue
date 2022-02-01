<template>
    <div class="block-base" :class="editing ? 'block-base--editing' : ''">
        <component :is="block.component" v-bind="block.content" />
        <block-controls :uuid="block.uuid"/>
    </div>
</template>

<script>
// import { computed, defineAsyncComponent } from 'vue'

// Components
import BlockControls from '@/components/Block/Controls/BlockControls.vue'

// Blocks
import FeatureDefault from '@/components/Block/Blocks/feature-default/feature-default.vue'
import HeroDefault from '@/components/Block/Blocks/hero-default/hero-default.vue'
import NavigationDefault from '@/components/Block/Blocks/navigation-default/navigation-default.vue'
import SubnavigationDefault from '@/components/Block/Blocks/subnavigation-default/subnavigation-default.vue'
import TextOneColumn from '@/components/Block/Blocks/text-one-column/text-one-column.vue'
import TextTwoColumns from '@/components/Block/Blocks/text-two-columns/text-two-columns.vue'
import TextThreeColumns from '@/components/Block/Blocks/text-three-columns/text-three-columns.vue'

import AccordionDefaultRepeater from '@/components/Block/Blocks/accordion-default-repeater.vue'
import CardDefaultRepeater from '@/components/Block/Blocks/card-default-repeater.vue'
import CardLargeTitleRepeater from '@/components/Block/Blocks/card-large-title-repeater.vue'
import DetailsListDefault from '@/components/Block/Blocks/details-list-default.vue'
import FeatureBoxed from '@/components/Block/Blocks/feature-boxed.vue'
import FeatureLarge from '@/components/Block/Blocks/feature-large.vue'
import FeatureLooping from '@/components/Block/Blocks/feature-looping.vue'
import FeaturesDefaultRepeater from '@/components/Block/Blocks/features-default-repeater.vue'
import FooterDefault from '@/components/Block/Blocks/footer-default.vue'
import GalleryDefault from '@/components/Block/Blocks/gallery-default.vue'
import GalleryOffset from '@/components/Block/Blocks/gallery-offset.vue'
import HeroBackground from '@/components/Block/Blocks/hero-background.vue'
import HeroBoxed from '@/components/Block/Blocks/hero-boxed.vue'
import HeroDouble from '@/components/Block/Blocks/hero-double.vue'
import HeroSideImage from '@/components/Block/Blocks/hero-side-image.vue'
import HeroVideoModal from '@/components/Block/Blocks/hero-video-modal.vue'
import HeroVideo from '@/components/Block/Blocks/hero-video.vue'
import ProcessDefault from '@/components/Block/Blocks/process-default.vue'
import TableComparison from '@/components/Block/Blocks/table-comparison.vue'
import TableDefault from '@/components/Block/Blocks/table-default.vue'
import TestimonialDefaultRepeater from '@/components/Block/Blocks/testimonial-default-repeater.vue'
import TestimonialDefault from '@/components/Block/Blocks/testimonial-default.vue'

// Dynamically import blocks as async components
// let blockNames = [
//     'feature-default',
//     'hero-default'
// ]
// let blocks = {}
// blockNames.forEach((block) => {
//     blocks[block] = defineAsyncComponent(() => import('@/components/Block/' + block + '.vue'))
// })

export default {
    props: {
        block: {
            type: Object,
            required: true
        },
        editing: {
            type: Boolean
        }
    },

    components: {
        // Components
        BlockControls,

        // Blocks
        FeatureDefault,
        HeroDefault,
        NavigationDefault,
        SubnavigationDefault,
        TextOneColumn,
        TextTwoColumns,
        TextThreeColumns,

        AccordionDefaultRepeater,
        CardDefaultRepeater,
        CardLargeTitleRepeater,
        DetailsListDefault,
        FeatureBoxed,
        FeatureLarge,
        FeatureLooping,
        FeaturesDefaultRepeater,
        FooterDefault,
        GalleryDefault,
        GalleryOffset,
        HeroBackground,
        HeroBoxed,
        HeroDouble,
        HeroSideImage,
        HeroVideoModal,
        HeroVideo,
        ProcessDefault,
        TableComparison,
        TableDefault,
        TestimonialDefaultRepeater,
        TestimonialDefault
    }
}
</script>

<style lang="scss" scoped>
.block-base {
    position: relative;
    overflow: hidden;
    // border: 2px solid transparent;
    background-color: var(--color-white);

    &--editing {
        border: 2px solid var(--color-primary);
    }
}
</style>
