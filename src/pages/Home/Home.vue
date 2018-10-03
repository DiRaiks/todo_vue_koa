<template>
    <div class="home">
        <div class="">
            Home
        </div>
        <div class="collumWr">
            <OneCollum/>
            <TwoCollum/>
        </div>
    </div>
</template>

<script>
    import OneCollum from './OneCollum.vue'
    import TwoCollum from './TwoCollum.vue'

    export default {
        components: { OneCollum, TwoCollum },
        data() {
            return {

            }
        },
        methods: {

        }
    }

</script>

<style src="./home.scss" scoped></style>