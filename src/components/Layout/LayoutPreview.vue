<template>
    <div class="layout-preview">
        <!-- Left column -->
        <div class="column-left utility__scrollable">

            <!-- Top actions -->
            <div class="column-left__actions">
                <button @click="$emit('close')" type="button" class="btn btn--sm btn--subtle">
                    <svg class="icon margin-right-xs" viewBox="0 0 24 24"><g fill="none"><path d="M9 19l1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z" fill="#212121"></path></g></svg>
                    Back
                </button>
                <button type="button" class="btn btn--sm btn--primary">Select</button>
            </div>

            <!-- Content -->
            <div class="column-left__content">
                <h4 class="margin-bottom-sm">Layout Title</h4>
                <div class="text-component">
                    <p>Etiam tempor diam in orci volutpat, quis ultricies leo pulvinar. Praesent sed eleifend arcu. Suspendisse sollicitudin tortor nec sagittis convallis. Donec consectetur metus odio, eget rutrum sapien congue eu. Proin blandit sollicitudin ullamcorper. Donec efficitur a mauris in iaculis. Cras non condimentum elit.</p>
                    <p>Aenean laoreet maximus interdum. Nulla at scelerisque velit. Fusce interdum nisl non ipsum fermentum, et fermentum risus tristique. Suspendisse et lorem risus. Morbi eget sodales nibh, vel consequat justo. Nam ut orci sed dui venenatis dictum. Morbi at hendrerit libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum nunc lorem, laoreet condimentum laoreet eget, semper quis magna. Fusce porta congue tincidunt. In ut consequat eros, vitae aliquam libero.</p>
                    <p>Etiam tempor diam in orci volutpat, quis ultricies leo pulvinar. Praesent sed eleifend arcu. Suspendisse sollicitudin tortor nec sagittis convallis. Donec consectetur metus odio, eget rutrum sapien congue eu. Proin blandit sollicitudin ullamcorper. Donec efficitur a mauris in iaculis. Cras non condimentum elit.</p>
                    <p>Aenean laoreet maximus interdum. Nulla at scelerisque velit. Fusce interdum nisl non ipsum fermentum, et fermentum risus tristique. Suspendisse et lorem risus. Morbi eget sodales nibh, vel consequat justo. Nam ut orci sed dui venenatis dictum. Morbi at hendrerit libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum nunc lorem, laoreet condimentum laoreet eget, semper quis magna. Fusce porta congue tincidunt. In ut consequat eros, vitae aliquam libero.</p>
                </div>
            </div>
        </div>

        <!-- Right column -->
        <div class="column-right utility__scrollable">
            <img class="" src="/images/layouts/layout.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    emits: ['close']
}
</script>

<style lang="scss" scoped>
.layout-preview {
    display: flex;
    max-height: 90vh;
}

.column-left {
    width: 350px;
    min-width: 350px;
    border-radius: var(--radius-md) 0 0 var(--radius-md);
    background-color: var(--color-contrast-lower);

    @include breakpoint(lg) {
        width: 450px;
        min-width: 450px;
    }

    .column-left__actions {
        // Flexbox
        display: flex;
    	justify-content: space-between;

        // Position
        position: fixed;
        width: inherit;; // Match size of parent
        z-index: 1;

        // Style
        padding: var(--space-md);
        border-radius: var(--radius-md) 0 0 0;
        background-color: var(--color-contrast-lower);
    }

    .column-left__content {
        padding: 100px var(--space-md);
    }
}

.column-right {
    padding: var(--space-md);
    margin-left: var(--space-md);
}
</style>
