<template>
    <div>
        <div class="">
            Home
        </div>
        <custom-input value="" type="text" label="Text" @input="inputHandler"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                itemName: null,
            }
        },
        methods: {
            inputHandler(text) {
                console.log(text)
                this.itemName = text
            }
        }
    }

</script>