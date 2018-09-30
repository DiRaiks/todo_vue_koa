import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Vue.component('custom-input', CustomInput);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')