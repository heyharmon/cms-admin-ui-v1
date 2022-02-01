<template>
    <layout-sidebar>
        <!-- Header -->
        <div class="flex flex-wrap items-center justify-between height-lg margin-bottom-md padding-bottom-lg border-bottom">
            <h1 class="text-lg">Uploads</h1>
            <div class="flex items-center gap-xs">
                <!-- <router-link :to="{ name: 'file-create' }" class="btn btn--primary btn--sm">New Upload</router-link> -->
            </div>
        </div>

        <!-- Pages -->
        <div class="app__module">
            <div class="app__module-column--left">
                Filters
                <!-- <menu-nested
                    :items="categories.data"
                    @item-selected="filterByCategory"
                /> -->
            </div>

            <div class="app__module-column--right">
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

        <!-- <div v-else class="padding-lg text-component bg-contrast-lower radius-lg">
            <h4>Upload files</h4>
            <p class="text-sm">You currently have no uploads.</p>
            <router-link :to="{ name: 'file-create' }" class="btn btn--primary btn--sm margin-right-xs">New Upload</router-link>
        </div> -->
    </layout-sidebar>
</template>

<script>
// Layout
import LayoutSidebar from '@/layouts/LayoutSidebar.vue'

// Components
import FilesUploader from '@/components/Files/FilesUploader'
import FilesGallery from '@/components/Files/FilesGallery'

export default {
    setup() {
        function onFileUploaded(file) {
            console.log('File Uploaded: ', file)
        }

        function onFileSelected(file) {
            console.log('File Selected: ', file)
        }

        return {
            onFileUploaded,
            onFileSelected
        }
    },

    components: {
        LayoutSidebar,
        FilesUploader,
        FilesGallery
    },
};
</script>
