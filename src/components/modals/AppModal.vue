<template>
    <div class="modal" :class="open ? 'modal--is-visible' : ''">
        <div class="modal__content">
            <slot/>
        </div>

        <!-- Close button -->
        <button @click="$emit('close')" class="reset modal__close-btn modal__close-btn--outer display@md">
            <svg class="icon icon--sm" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="3" x2="21" y2="21" /><line x1="21" y1="3" x2="3" y2="21" /></g>
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean
        }
    },

    emits: ['close']
}
</script>

<style lang="scss" scoped>
.modal {
    // Flexbox
    display: flex;
    justify-content: center;
    align-items: center;

    // Position
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: var(--zindex-overlay);

    // Style
    padding: var(--space-md);
    background-color: alpha(var(--color-contrast-higher), 0.8);

    // Visibility
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, background-color 0.2s, visibility 0s 0.2s;

    &--is-visible {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.2s, background-color 0.2s, visibility 0s;
    }

    &:not(.modal--is-visible) {
        pointer-events: none;
        background-color: transparent;
    }
}

.modal__content {
    background-color: var(--color-bg);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
}

.modal__close-btn {
    display: flex;
    flex-shrink: 0;
    border-radius: 50%;
    transition: .2s;
    cursor: pointer;

    .icon {
        display: block;
        margin: auto;
    }
}

.modal__close-btn--outer {
    width: 48px;
    height: 48px;
    position: fixed;
    top: var(--space-sm);
    right: var(--space-sm);
    z-index: var(--zindex-fixed-element);
    background-color: alpha(var(--color-contrast-higher), 0.8);

    &:hover {
        background-color: var(--color-contrast-higher);
    }

    .icon {
        color: var(--color-bg); // icon color
    }
}
</style>
