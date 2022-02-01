<template>
    <!-- Label -->
    <div class="margin-bottom-md">
        <label class="form-label margin-bottom-xxs">Label</label>
        <input v-model="block.content.label" class="form-control width-100%" type="text">
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
        <input v-model="block.content.button_label" class="form-control width-100% margin-bottom-xxxs" type="text">
        <input v-model="block.content.button_url" class="form-control width-100%" type="text">
    </div>
</template>

<script>
export default {
    props: {
        block: {
            type: Object,
            required: true
        }
    }
}
</script>
