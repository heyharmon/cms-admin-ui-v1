<template>
    <div class="filter-nav--expanded">
        <div class="filter-nav__wrapper">
            <nav class="filter-nav__nav">
                <ul class="filter-nav__list">
                    <li class="filter-nav__item">
                        <button class="reset filter-nav__btn filter-nav__btn--current">All</button>
                    </li>

                    <li class="filter-nav__item">
                        <button class="reset filter-nav__btn">Recent</button>
                    </li>

                    <li class="filter-nav__item">
                        <button class="reset filter-nav__btn">Favorites</button>
                    </li>

                    <li class="filter-nav__item">
                        <button class="reset filter-nav__btn">Team</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.filter-nav--expanded {
    .filter-nav__nav {
        display: flex;
        overflow: auto;
        padding: var(--space-xs) 0;
    }

    .filter-nav__list {
        display: inline-flex;
        position: relative;
    }

    .filter-nav__item {
        flex-shrink: 0;
        position: relative;
        z-index: 1;
    }

    .filter-nav__btn {
        margin: 0 var(--space-xxxs);
        padding: var(--space-xxxs) var(--space-xs);
        color: alpha(var(--color-contrast-higher), 0.5);
        cursor: pointer;
        transition: color .2s;

        &:hover {
            color: var(--color-primary);
        }

        &--current {
            color: var(--color-primary);
            background-color: var(--color-bg);
            box-shadow: var(--shadow-sm);
            border-radius: var(--radius-md);
            transition: transform .3s, width .3s;
        }
    }
}
</style>
