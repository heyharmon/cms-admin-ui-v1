<template>
    <!-- Invert -->
    <div class="margin-bottom-md">
        <input v-model="block.content.invert" type="checkbox" class="margin-right-xxs" id="invert">
        <label class="form-label" for="invert">Invert</label>
    </div>

    <!-- Padding -->
    <div class="margin-bottom-md">
        <base-select
            v-model="block.content.padding"
            label="Padding"
            :options="[
                'padding-y-xl',
                'padding-top-xl',
                'padding-bottom-xl',
                'padding-y-0'
            ]"
        />
    </div>

    <!-- Label -->
    <div class="margin-bottom-md">
        <base-input
            v-model="block.content.label"
            label="Label"
            type="text"
        />
    </div>

    <!-- Headline -->
    <div class="margin-bottom-md">
        <label class="form-label margin-bottom-xxs">Headline</label>
        <textarea v-model="block.content.headline" class="form-control width-100%" type="text"></textarea>
    </div>

    <!-- Subheadline -->
    <div class="margin-bottom-md">
        <label class="form-label margin-bottom-xxs">Subheadline</label>
        <textarea v-model="block.content.subheadline" class="form-control width-100%" rows="3" type="text"></textarea>
    </div>

    <!-- Button -->
    <div class="margin-bottom-md">
        <label class="form-label margin-bottom-xxs">Button</label>
        <input v-model="block.content.button_label" class="form-control width-100% margin-bottom-xxxs" type="text" placeholder="Label">
        <input v-model="block.content.button_url" class="form-control width-100%" type="text" placeholder="URL">
    </div>

    <!-- Image -->
    <div class="margin-bottom-md">
        <label class="form-label block margin-bottom-xxs">Image</label>
        <router-link :to="{ name: 'page-edit-block-files' }" class="editor__image reset">
            <div
                :style="{ backgroundImage: 'url(' + `https://d25r5txdw1c9o7.cloudfront.net/fit-in/100x100/${block.content.image_url}` + ')' }"
                class="editor__image__thumbnail"
            />
            <div class="editor__image__description">
                <p>Image Title</p>
                <router-link :to="{ name: 'page-edit-block-files' }" class="btn btn--primary btn--sm">
                    Set Image
                </router-link>
            </div>
        </router-link>
    </div>
</template>

<script>
// Components
import BaseInput from '@/components/Form/BaseInput.vue'
import BaseSelect from '@/components/Form/BaseSelect.vue'

export default {
    props: {
        block: {
            type: Object,
            required: true
        }
    },

    components: {
        BaseInput,
        BaseSelect
    }
}
</script>

<style lang="scss" scoped>
.editor__image {
    display: flex;
    align-items: center;
    padding: var(--space-xxs);
    background-color: var(--color-white);
    border: 2px solid var(--color-contrast-low);
    border-radius: var(--radius-md);
    text-decoration: none;

    &__thumbnail {
        width: 80px;
        height: 80px;
        margin-right: var(--space-sm);
        display: inline-block;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        border: 1px solid var(--color-contrast-low);
        border-radius: var(--radius-md);
        transition: box-shadow;
        transition-duration: .4s;
        cursor: pointer;

        &:hover {
            box-shadow:inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
        }
    }

    &__description {
        p {
            margin-bottom: var(--space-xxs);
        }
    }
}
</style>
