<template>
    <div class="card">
        <div class="card__header">
            <div class="card__title">
                <h5>{{ title }}</h5>
            </div>
        </div>

        <figure class="card__img">
            <img :src="image" alt="Card Image">
            <div class="card__buttons">
                <a @click="$emit('onSelect')" class="btn btn--primary margin-right-xs" href="#0">Select</a>
                <a @click="$emit('onPreview')" class="btn btn--subtle" href="#">Preview</a>
            </div>
        </figure>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Card Title'
        },
        image: {
            type: String,
            default: 'https://via.placeholder.com/350x450'
        }
    },

    emits: ['onPreview', 'onSelect']
}
</script>

<style lang="scss" scoped>
.card {
    background-color: var(--color-bg);
    box-shadow: var(--shadow-sm);
    border-radius: var(--radius-md);
    overflow: hidden;

    &--selected {
        border: 2px solid var(--color-primary);
    }

    &:hover {
        box-shadow: var(--shadow-md);

        .card__img::after {
            opacity: 1;
        }

        .card__buttons {
            opacity: 1;
        }
    }
}

.card__header {
    padding: var(--space-xs);
    border-bottom: 1px solid var(--color-contrast-low);
}

.card__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card__img {
    position: relative;

    img {
        display: block;
        width: 100%;
    }

    &::after { // overlay layer
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: alpha(var(--color-black), 0.2);
        opacity: 0;
        transition: opacity 0.2s;
    }
}

.card__buttons {
    // display: flex;
    position: absolute;
    z-index: 1;
    width: 260px;
    top: 36%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.2s;

    .btn {
        width: 100%;
        margin-bottom: var(--space-xs);
    }
}
</style>
