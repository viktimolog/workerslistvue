import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import WorkersList from './components/WorkersList';
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
            store.dispatch('workers/fetchItems')
                .then(() => next())
                .catch(() => next({ name: '404' }))
        }
    },
    {
        name: 'worker',
        path: '/workers/:id',
        component: Cart,
        beforeEnter(to, from, next){
            store.dispatch('workers/fetchItem', to.params.id)
                .then(() => next())
                .catch(() => next({ name: '404' }))
        }
    },
    {
        name: '404',
        path: '*',
        component: E404
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});
