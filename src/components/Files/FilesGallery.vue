<template>
    <div class="files-gallery grid gap-xs margin-top-md">
        <div
            v-for="file in files"
            :key="file.id"
            :style="{ backgroundImage: 'url(' + `https://d25r5txdw1c9o7.cloudfront.net/fit-in/350x350/${file.path}` + ')' }"
            @click="$emit('file-selected', file)"
            class="files-gallery__item col-4"
        />
    </div>
</template>

<script>
// Composables
import useFile from '@/composables/useFile'

export default {
    setup() {
        const { files, filesLoading, getFiles } = useFile()

        getFiles()

        return {
            files
        }
    }
}
</script>

<style lang="scss">
.files-gallery {
    &__item {
        height: 160px;
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
}
</style>
