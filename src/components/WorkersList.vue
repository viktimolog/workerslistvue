<template>
<div>
<div class="col col-sm-9">
<h1>{{title}}</h1>
</div>
    <div class="col col-sm-3">
    <button
            class="btn btn-primary button"
            @click="switchNewWorker">
        {{btnTitle}}
    </button>
    </div>
    <div class="row">
        <table class="table table-border table-hover" v-if="!isNewWorker">
            <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Salary</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="worker in workers">
                <td>{{worker.name}}</td>
                <td>{{worker.position}}</td>
                <td>${{worker.salary}}</td>
                <td>
                    <button @click="onOrder"
                            class="btn btn-warning">
                        Edit
                    </button>
                </td>
                <td>
                    <button @click="delWorker(worker._id)"
                            class="btn btn-danger">
                        Delete
                    </button>
                </td>
            </tr>
            </tbody>
        </table>

        <div v-else>
            <cart></cart>
        </div>
    </div>
</div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import Cart from './Cart';
    import './Styles/workersListStyles.css';

    export default {
        components: { Cart },

        data () {
            return {
                isNewWorker: false,
                title: 'Workers list',
                btnTitle: 'Add new worker'
            }
        },
        created(){
          // this.$store.dispatch('workers/loadItems');
        },
        computed:{
            ...mapGetters('workers',{
                workers: 'items'
            }),
            ...mapGetters('cart',{
                inCart: 'products'
            }),
            isNewWorker(){
                return this.isNewWorker;
            },
            title(){
                return this.title;
            },
            btnTitle(){
                return this.btnTitle;
            }
        },
        methods:{
            ...mapActions('cart',{
                addToCart: 'add',
                removeFromCart: 'remove'
            }),
            ...mapActions('workers',{
                delWorker: 'delItem'
            }),
            switchNewWorker(){
                this.isNewWorker = !this.isNewWorker;
                if(this.isNewWorker){
                    this.title = 'New worker';
                    this.btnTitle = 'Back to workers list'
                }
                else{
                    this.title = 'Workers list';
                    this.btnTitle = 'Add new worker'
                }
            }
        }
    }
</script>
