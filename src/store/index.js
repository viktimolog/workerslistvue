import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from './modules/menu';
import workers from './modules/workers';

export const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',

    modules:{
        menu,
        workers
    }
});
