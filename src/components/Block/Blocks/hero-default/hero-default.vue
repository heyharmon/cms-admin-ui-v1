<template>
    <section class="hero padding-y-xxl">
        <div class="container max-width-adaptive-sm">
            <div class="text-center">
                <div class="text-sm opacity-60% margin-bottom-xxs">{{ label }}</div>

                <div class="text-component margin-bottom-sm">
                    <h1>{{ headline }}</h1>
                    <p>{{ subheadline }}</p>
                </div>

                <div class="flex flex-wrap flex-center gap-sm">
                    <a :href="button_url" target="_blank" class="btn btn--primary">{{ button_label }}</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'hero-default',

    props: {
        label: {
            type: String,
            default: 'This is the label'
        },
        headline: {
            type: String,
            default: 'Lorem ipsum dolor sit amet'
        },
        subheadline: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        button_label: {
            type: String,
            default: 'Call to Action'
        },
        button_url: {
            type: String,
            default: 'https://google.com'
        }
    }
}
</script>

<style lang="scss" scoped>
.hero {
  // if bg = img
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

// --overlay-layer
.hero--overlay-layer {
  &::after { // add a layer in between the img/video background and the content
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: alpha(var(--color-bg), 0.65);
    z-index: 1;
  }
}
</style>
