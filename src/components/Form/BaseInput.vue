<template>
    <div class="form-group">
        <label v-if="label" class="form-label margin-bottom-xxs">{{ label }}</label>
        <input
            :value="modelValue"
            :placeholder="placeholder"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
            class="form-control width-100%"
        >
    </div>
</template>

<script>
export default {
    props: {
        modelValue: { // Enables v-model behavior
            type: [String, Number],
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
    }
}
</script>
