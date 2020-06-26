import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue'
import addStudent from '../components/addStudent.vue'
import edit from '../components/edit.vue';

Vue.use(VueRouter);


const routes = new VueRouter({
    mode : 'history',
    routes : [

        {
            path: '/',
            component: Home,
            name : 'home',
        },
        {
            path: '/add-student',
            component: addStudent,
            name : 'add-student',
        },
        {
            path: '/edit/:id',
            component: edit,
            name : 'edit',
        },


    ]

})

export default routes;
