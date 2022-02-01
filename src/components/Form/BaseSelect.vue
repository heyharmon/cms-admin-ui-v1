<template>
    <div class="form-group">
        <label v-if="label" class="form-label margin-bottom-xxs">{{ label }}</label>
        <div class="select">
            <select
                :value="modelValue"
                :name="label"
                :id="label"
                v-bind="$attrs"
                @change="$emit('update:modelValue', $event.target.value)"
                class="select_input form-control width-100%"
            >
                <option
                    v-for="option in options"
                    :value="option"
                    :key="option"
                    :selected="option === modelValue"
                >
                    {{ option }}
                </option>
            </select>
            <svg class="select__icon" aria-hidden="true" viewBox="0 0 16 16"><polyline points="1 5 8 12 15 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
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
        options: {
            type: Array,
            required: true
        },
    }
}
</script>

<style lang="scss">
/* --------------------------------

File#: _1_custom-select
Title: Custom Select
Descr: Custom Select Control
Usage: codyhouse.co/license

-------------------------------- */

:root {
  // --default variation only 👇
  --select-icon-size: 16px;
  --select-icon-right-margin: var(--space-sm); // icon margin right
  --select-text-icon-gap: var(--space-xxxs); // gap between text and icon
}

.select {
  position: relative;
}

.select__icon {
  width: var(--select-icon-size);
  height: var(--select-icon-size);
  pointer-events: none;
  position: absolute;
  right: var(--select-icon-right-margin);
  top: 50%;
  transform: translateY(-50%);
}
</style>
