import Vue from 'vue';
import axios from 'axios';
import Urls from '../../constants/Urls';

export default {
    namespaced: true,
    state:{
        items: [],
        item: {}
    },
    getters:{
        items(state){
            return state.items;
        },
        item(state){
            return state.item;
        }
    },
    mutations:{
        fetchItems(state, data){
            state.items = data;
        },
        fetchItem(state, data){
            state.item = data;
        }
    },
    actions:{
        fetchItems(store){
            axios.get(Urls.getWorkers)
                .then(data=>store.commit('fetchItems', data.data));
        },
        fetchItem(store, id){
            axios.get(Urls.getWorker + id)
                .then(data=>store.commit('fetchItem', data.data));
        },
        addItem(store, newWorker){
            axios.post(Urls.addWorker, newWorker)
                .then(res=>{
                    alert(`User ${res.data.worker.name} has been added!`);
                    store.dispatch('fetchItems');
                })
        },
        delItem(store, id){
            axios.delete(Urls.delWorker + id)
                .then(res=>{
                    alert('User has been deleted!');
                    store.dispatch('fetchItems');
                })
        },
        updateItem(store, item){
            axios.put(Urls.updateWorker + item._id, item)
                .then(res=>{
                    store.dispatch('fetchItems');
                    alert('User has been edited!');
                })
        }
    }
};
