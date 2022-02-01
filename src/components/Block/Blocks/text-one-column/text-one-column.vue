<template>
    <section :class="padding">
        <div class="container max-width-adaptive-lg">
            <div class="parent grid">
                <div class="col-12 col-8@sm text-component">
                    <h2>{{ col_1_title }}</h2>
                    <p>{{ col_1_content }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'text-one-column',

    props: {
        padding: {
            type: String,
            default: 'padding-y-xl'
        },
        col_1_title: {
            type: String,
            default: 'Title'
        },
        col_1_content: {
            type: String,
            default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada justo ac risus dictum, ut lobortis massa facilisis. Donec risus nisl, consectetur a elementum sit amet, aliquet at magna.'
        }
    }
}
</script>
