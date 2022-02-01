<template>
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

    <h6 class="margin-bottom-md border-bottom padding-bottom-xs font-bold">Column 1</h6>

    <!-- Title -->
    <div class="margin-bottom-md">
        <label class="form-label margin-bottom-xxs">Title</label>
        <input v-model="block.content.col_1_title" class="form-control width-100%" type="text">
    </div>

    <!-- Content -->
    <div class="margin-bottom-md">
        <label class="form-label margin-bottom-xxs">Content</label>
        <textarea v-model="block.content.col_1_content" rows="6" class="form-control width-100%" type="text"></textarea>
    </div>

    <h6 class="margin-bottom-md border-bottom padding-bottom-xs font-bold">Column 2</h6>

    <!-- Title -->
    <div class="margin-bottom-md">
        <label class="form-label margin-bottom-xxs">Title</label>
        <input v-model="block.content.col_2_title" class="form-control width-100%" type="text">
    </div>

    <!-- Content -->
    <div class="margin-bottom-md">
        <label class="form-label margin-bottom-xxs">Content</label>
        <textarea v-model="block.content.col_2_content" rows="6" class="form-control width-100%" type="text"></textarea>
    </div>

    <h6 class="margin-bottom-md border-bottom padding-bottom-xs font-bold">Column 3</h6>

    <!-- Title -->
    <div class="margin-bottom-md">
        <label class="form-label margin-bottom-xxs">Title</label>
        <input v-model="block.content.col_3_title" class="form-control width-100%" type="text">
    </div>

    <!-- Content -->
    <div class="margin-bottom-md">
        <label class="form-label margin-bottom-xxs">Content</label>
        <textarea v-model="block.content.col_3_content" rows="6" class="form-control width-100%" type="text"></textarea>
    </div>
</template>

<script>
// Components
import BaseSelect from '@/components/Form/BaseSelect.vue'

export default {
    props: {
        block: {
            type: Object,
            required: true
        }
    },

    components: {
        BaseSelect
    }
}
</script>
