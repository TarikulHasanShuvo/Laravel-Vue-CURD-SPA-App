import Vue from 'vue';

import routes from './router/index'

require('./bootstrap');



Vue.component('app-header', require('./components/header.vue').default);


const app = new Vue({
    el: '#app',
    router: routes,

});


