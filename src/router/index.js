import Vue from 'vue';
import Registration from '../pages/Registration/Registration.vue';
import Home from '../pages/Home/Home.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/registration', name: 'registration', component: Registration }
    ]
})