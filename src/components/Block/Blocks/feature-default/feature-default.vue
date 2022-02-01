<template>
    <section :class="padding">
        <div class="container max-width-adaptive-lg">
            <div class="grid gap-x-lg items-center">
                <div
                    :class="invert ? 'order-2@md' : ''"
                    class="col-6@md"
                >
                    <div class="text-component">
                        <p v-if="label" class="text-sm color-contrast-medium">{{ label }}</p>
                        <h2>{{ headline }}</h2>
                        <p v-if="subheadline">{{ subheadline }}</p>
                    </div>

                    <div class="margin-top-sm">
                        <div class="flex flex-wrap gap-sm items-center">
                            <!-- <a href="#0" class="btn btn--primary">Download</a> -->
                            <a v-if="button_url && button_label" :href="button_url" target="_blank" class="btn bg border">{{ button_label }}</a>
                        </div>
                    </div>
                </div>

                <div class="col-6@md">
                    <figure>
                        <img class="block width-100%" :src="`https://d25r5txdw1c9o7.cloudfront.net/fit-in/650x450/${image_url}`" alt="Image description">
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'feature-default',

    props: {
        padding: {
            type: String,
            default: 'padding-y-xl'
        },
        invert: {
            type: Boolean,
            default: false
        },
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
        },
        image_url: {
            type: String,
            default: 'files/b91c769fd41d8f5091e0dc86e14e4ea4.jpg'
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
