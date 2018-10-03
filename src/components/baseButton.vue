<template>
    <button @click="handleClick" :class="buttonClass">
        <slot/>
        <SmallLoader v-if="isPending" type="white" />
    </button>
</template>

<script>
    export default {
        props: {
            isSmall: { type: Boolean, default: false },
            isPending: { type: Boolean, default: false },
            viewType: { value: String, default: '' },
            disabled: { type: Boolean, default: false },
        },
        computed: {
            buttonClass() {
                const { isSmall, isPending, disabled, viewType } = this

                return {
                    defaultBtn: true,
                    baseButton: true,
                    buttonSmall: isSmall,
                    buttonPending: isPending,
                    buttonDisabled: disabled,
                    [`button-${ viewType }`]: viewType,
                }
            },
        },
        methods: {
            handleClick(event) {
                if (this.disabled || this.isPending) {
                    this.$emit('errorClick', event)
                } else {
                    this.$emit('click', event)
                }
            },
        },
    }
</script>

<style src="./style.css" scoped></style>
