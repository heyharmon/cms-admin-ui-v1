<template>
    <header v-if="page" class="app__header">
        <!-- Left -->
        <div class="app__header__column app__header__column--left">
            <!-- Back button -->
            <router-link :to="{ name: 'page-edit' }" class="btn btn--sm bg border margin-right-sm">
                <svg class="icon margin-right-xs" viewBox="0 0 24 24"><g fill="none"><path d="M9 19l1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z" fill="#212121"></path></g></svg>
                Editor
            </router-link>
        </div>

        <!-- Center -->
        <div class="app__header__column app__header__column--center">
            <p class="text-sm">{{ page.title }}</p>
        </div>

        <!-- Right -->
        <div class="app__header__column app__header__column--right">
            <!-- Status -->
            <div class="flex items-center">
                <div class="status-dot margin-right-xxxs"></div>
                <span class="text-xs">Published</span>
            </div>
        </div>
    </header>

    <component
        v-if="page"
        v-for="block in page.blocks"
        :key="block.uuid"
        :is="block.component"
        v-bind="block.content"
    />
</template>

<script>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

// Composables
import usePage from '@/composables/usePage'

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

export default {
    // Need this since component does not have a root node
    // Silenzes Vue warning about extraneous non-props
    inheritAttrs: false,

    setup() {
        const route = useRoute()
        const { page, showPage } = usePage()

        // Load page
        if (!page.value) {
            showPage(route.params.page)
        }

        // Update page when route changes
        watch(() => route.params.page, (id) => {
            if (!id) return
            showPage(id)
        })

        return {
            page
        }
    },

    components: {
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
</style>
