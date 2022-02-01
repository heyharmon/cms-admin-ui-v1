<template>
    <div class="editor-header">
        <h5 class="editor-header__title">Editor</h5>
        <div class="editor-header__buttons">
            <!-- Close/Open Wiki -->
            <router-link v-if="$route.name == 'page-edit-block-wiki'" :to="{ name: 'page-edit-block' }" class="editor-header__button btn btn--sm bg border margin-right-xs">
                Wiki
            </router-link>
            <router-link v-else :to="{ name: 'page-edit-block-wiki' }" class="editor-header__button btn btn--sm bg border margin-right-xs">
                Wiki
            </router-link>

            <!-- Close Block Editor -->
            <router-link :to="{ name: 'page-edit' }" class="editor-header__button btn btn--sm btn--primary">
                Close
            </router-link>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.editor-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-sm);
    padding-bottom: var(--space-sm);
    border-bottom: 1px solid var(--color-contrast-low);
}
</style>
