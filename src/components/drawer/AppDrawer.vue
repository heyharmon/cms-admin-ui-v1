<template>
    <div :class="open ? 'drawer--is-visible' : ''">
        <div class="drawer">
            <!-- Content -->
            <div class="drawer__content">
                <div class="drawer__body utility__scrollable">
                    <slot />
                </div>
            </div>

            <!-- Close button -->
            <button @click="close" class="reset drawer__close-btn">
                <svg class="icon icon--xs" viewBox="0 0 16 16"><g stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><line x1="13.5" y1="2.5" x2="2.5" y2="13.5"></line><line x1="2.5" y1="2.5" x2="13.5" y2="13.5"></line></g></svg>
            </button>
        </div>

        <!-- Overlay -->
        <div @click="close" class="drawer__overlay"></div>
    </div>
</template>

<script>
export default {
    name: 'AppDrawer',

    props: {
        open: {
            type: Boolean,
            default: false
        }
    },

    emits: ['close'],

    setup(props, { emit }) {
        function close() {
            emit('close')
            document.body.classList.toggle('utility__lock-scroll')
        }

        return {
            close
        }
    }
};
</script>

<style lang="scss" scoped>
.drawer {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 820px;
    z-index: 5;
    background-color: var(--color-contrast-lower);
    box-shadow: var(--shadow-xl);

    // Visibility hidden
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity 0.2s, visibility 0.2s;
    transition: opacity 0.2s, visibility 0.2s;
}

// Backdrop
.drawer__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;

    background-color: alpha(var(--color-contrast-higher), 0.75);
    cursor: pointer;

    // Hidden by default
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity 0.2s, visibility 0.2s;
    transition: opacity 0.2s, visibility 0.2s;
}

// Drawer visible
.drawer--is-visible {
    .drawer,
    .drawer__overlay {
        visibility: visible;
        opacity: 1;
    }
}

// Close button
.drawer__close-btn {
    width: 48px;
    height: 48px;
    position: fixed;
    top: var(--space-sm);
    left: var(--space-sm);
    z-index: var(--zindex-fixed-element);

    background-color: alpha(var(--color-contrast-higher), 0.8);
    border-radius: 50%;
    transition: .2s;
    cursor: pointer;

    &:hover {
        background-color: var(--color-contrast-higher);
    }

    .icon {
        display: block;
        margin: auto;
        color: var(--color-bg);
    }
}

.drawer__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .drawer--is-visible & {
        &:not() {
            pointer-events: none;
            background-color: transparent;
        }
    }
}

// scrollable area
.drawer__body {
    height: 100%;
    overflow: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch; // smooth scroll on iOS
}
</style>
