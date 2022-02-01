<template>
    <div class="files">
        <!-- Header -->
        <div class="editor-header">
            <h5 class="editor-header__title">Files</h5>
            <div class="editor-header__buttons">
                <router-link :to="{ name: 'page-edit-block' }" class="editor-header__button btn btn--sm btn--primary">
                    Close
                </router-link>
            </div>
        </div>

        <!-- Editor -->
        <div class="editor-body">
            <!-- File Uploader -->
            <files-uploader
                @file-uploaded="onFileUploaded"
            />

             <!-- File Gallery -->
            <files-gallery
                @file-selected="onFileSelected"
            />
        </div>
    </div>
</template>

<script>
// import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Composables
import usePage from '@/composables/usePage'

// Components
import FilesUploader from '@/components/Files/FilesUploader'
import FilesGallery from '@/components/Files/FilesGallery'

export default {
    async setup() {
        const route = useRoute()
        const { updatePageBlock } = usePage()

        // const block = await computed(() => {
        //     return page.value.blocks.find(
        //         block => block.uuid === route.params.uuid
        //     )
        // })

        function onFileUploaded(file) {
            console.log('File Uploaded: ', file)
        }

        function onFileSelected(file) {
            // console.log(file.path)
            updatePageBlock(route.params.uuid, 'image_url', file.path)

            // updatePageBlock(
            //     block_uuid: route.params.uuid,
            //     field: image_url,
            //     payload: file.path
            // )
        }

        return {
            onFileUploaded,
            onFileSelected
        }
    },

    components: {
        FilesUploader,
        FilesGallery
    }
}
</script>

<style lang="scss">
.files {
    .editor-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--space-sm);
        padding-bottom: var(--space-sm);
        border-bottom: 1px solid var(--color-contrast-low);
    }

    .filepond--panel-root {
        background-color: var(--color-white);
    }

    .files-gallery {
        &__item {
            height: 120px;
        }
    }
}
</style>
