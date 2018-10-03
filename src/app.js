import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import CustomInput from './components/customInput.vue';
import baseButton from './components/baseButton.vue';


Vue.component('custom-input', CustomInput);
Vue.component('base-button', baseButton);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')