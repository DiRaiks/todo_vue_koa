<template>
    <div class="oneCollum">
        <div>
            <custom-input :value="itemName" type="text" label="Text" @input="inputHandler"/>
        </div>
        <base-button isSmall @click="buttonHandler">Add</base-button>
        <div class="itemsWr">
            <div draggable="true" id="drag1"  @dragend="drop" @dragstart="dragStart" class="item" v-for="text in items">{{ text }}</div>
        </div>
        <div id="div1" @dragover="dragOver">ondrop!!!!</div>
    </div>
</template>

<script>
    import { mapGetters, mapActions }  from 'vuex'
    export default {
        data() {
            return {
                itemName: null,
                items: [],
            }
        },
        computed: {
            ...mapGetters({ dragEl: 'getDragEl', toEl: 'getDragToEl' }),
        },
        methods: {
            ...mapActions({
                setDragElement: 'setDragElement',
                setDragToElement: 'setDragToElement',
            }),
            inputHandler(text) {
                this.itemName = text
            },
            buttonHandler() {
                if (!this.itemName) return
                this.items.push(this.itemName)
                this.itemName = ''
            },
            dragStart(ev) {
                console.log(ev)
                this.setDragElement(ev.target.id)
            },
            drop(ev) {
                ev.preventDefault();
                const toElem = document.getElementById(this.toEl)
                toElem.appendChild(document.getElementById(this.dragEl));
            },
            dragOver(ev) {
                this.setDragToElement(ev.target.id)
            },
            dropInsert(ev) {

            },
        }
    }
</script>

<style src="./home.scss" scoped></style>