<template>
    <h4 class="margin-bottom-sm">SEO</h4>

    <p class="margin-bottom-md">
        Set up and optimize how your site appears in search engines. <br>
        <a href="#">Learn More</a>
    </p>

    <!-- SEO Title -->
    <base-input
        label="SEO Title"
        type="text"
    />

    <!-- SEO Description -->
    <base-input
        label="SEO Description"
        type="textarea"
    />
</template>

<script>
// Components
import BaseInput from '@/components/Form/BaseInput.vue'

export default {
    components: {
        BaseInput
    }
}
</script>
