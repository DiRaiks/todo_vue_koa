import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 0,
    dragEl: null,
    toEl: null,
}

const store =  new Vuex.Store({
    state,
    mutations: {
        increment (state) {
            state.count++
        },
        setDragEl: (state, dragEl) => state.dragEl = dragEl,
        setDragToEl: (state, toEl) => state.toEl = toEl
    },
    getters: {
        getDragEl: (state) => state.dragEl,
        getDragToEl: (state) => state.toEl,
    },
    actions: {
        setDragElement: ({ commit }, dragEl ) => commit('setDragEl', dragEl),
        setDragToElement: ({ commit }, toEl) => commit('setDragToEl', toEl)
    }
})

export default store;