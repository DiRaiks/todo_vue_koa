<template>
    <div>
        <custom-input :value="itemName" type="text" label="Text" @input="inputHandler"/>
        <base-button isSmall @click="buttonHandler">Add</base-button>
        <div>
            <div v-for="text in items">{{ text }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                itemName: null,
                items: [],
            }
        },
        methods: {
            inputHandler(text) {
                this.itemName = text
            },
            buttonHandler() {
                if (!this.itemName) return
                this.items.push(this.itemName)
                this.itemName = ''
            }
        }
    }
</script>