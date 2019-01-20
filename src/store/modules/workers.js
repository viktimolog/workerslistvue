import Vue from 'vue';
import axios from 'axios';
import Urls from '../../constants/Urls'

export default {
    namespaced: true,
    state:{
        items: []
    },
    getters:{
        items(state){
            return state.items;
        },
        // item: state => id => state.items.find(product => product.id_product == id)
        item: state => id => state.items.find(worker => worker._id == id)
    },
    mutations:{
        fetchItems(state, data){
            console.log('data = ', data);
            state.items = data;
        }
    },
    actions:{
        fetchItems(store){
            axios.get(Urls.getWorkers)
                .then(data=>store.commit('fetchItems', data.data));
        },
        addItem(store, newWorker){
            axios.post(Urls.addWorker, newWorker)
                .then(res=>alert(`User ${res.data.worker.name} has been added!`))
        },
        delItem(store, id){
            axios.delete(Urls.delWorker + id)
                .then(res=>alert('User has been deleted!'))
        }
    }
};