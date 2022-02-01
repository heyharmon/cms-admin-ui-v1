<template>
    <div class="app">
        <app-header />

        <div class="app__wrapper">
            <main class="app__body max-width-adaptive-xl">
                <slot/>
            </main>
        </div>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
    name: 'LayoutDefault',

    components: {
        AppHeader
    }
};
</script>

<style lang="scss" scoped>
/* --------------------------------
App
-------------------------------- */
.app {
    padding-bottom: var(--space-xl);
    background-color: var(--color-contrast-lower);
}

/* --------------------------------
App Wrapper
-------------------------------- */
.app__wrapper {
    display: flex;
}

/* --------------------------------
App Body
-------------------------------- */
.app__body {
    display: flex;
    flex-direction: column;
    // width: 75rem;
    margin: 0 auto;
    position: relative;
    padding: var(--space-md) var(--space-md) var(--space-sm) 0;
    min-height: calc(100vh - var(--app-ui-header-height));
    z-index: 1;
}
</style>
