<template lang="html">
    <label>
        {{label}}
        <input
                :placeholder="placeholder"
                :type='type'
                :value='value'
                @input="$emit('input', $event.target.value)" />
    </label>
</template>

<script>
    export default {
        props: {
            type: { type: String, required: true },
            value: { required: true },
            placeholder: { type: String, default: '' },
            label: { type: String, default: '' },
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="css">