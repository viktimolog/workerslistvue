export default {
    namespaced: true,
    state:{
        items: [
            {
                url: '/workers',
                text: 'Workers List'
            },
            {
                url: '/cart',
                text: 'Your cart'
            },
            {
                url: '/checkout',
                text: 'Order now'
            },
        ]

    },
    getters:{
        items(state){
            return state.items;
        }
    },
    mutations:{

    },
    actions:{

    }
};