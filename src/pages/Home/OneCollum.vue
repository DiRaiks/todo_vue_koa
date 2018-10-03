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
    export default {
        data() {
            return {
                itemName: null,
                items: [],
                dragEl: null,
                toElement: null,
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
            },
            dragStart(ev) {
                console.log(ev)
                this.dragEl = ev.target.id
            },
            drop(ev) {
                console.log('drop',ev)
                ev.preventDefault();
                const toElem = document.getElementById(this.toElement)
                toElem.appendChild(document.getElementById(this.dragEl));
            },
            dragOver(ev) {
                console.log(ev)
                this.toElement = ev.target.id
            },
            dropInsert(ev) {

            },
        }
    }
</script>

<style src="./home.scss" scoped></style>