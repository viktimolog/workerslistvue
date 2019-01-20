import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import WorkersList from './components/WorkersList';
import Worker from './components/Worker';
import Cart from './components/Cart';
import E404 from './components/E404';

import {store} from './store';

const routes = [
    {
        name: '',
        path: '',
        redirect: {name: 'workers'}
    },
    {
        name: 'workers',
        path: '/workers',
        component: WorkersList,
        beforeEnter(from, to, next){
            store.dispatch('workers/fetchItems');
            next();
        }
    },
    {
        path: '/workers/:id',
        component: Worker
    },
    {
        name: 'cart',
        path: '/cart',
        component: Cart
    },
    {
        name: '404',
        path: '*',
        component: E404
    },
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});
