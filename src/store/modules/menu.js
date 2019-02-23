export default {
    namespaced: true,
    state:{
        items: [
            {
                url: '/workers',
                text: 'Workers List'
            },
            {
                url: '/notes',
                text: 'Notes'
            }
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