<template>
    <div>
        <hr>
        <div class="alert alert-warning">
            <form v-on:submit.prevent="submbit">
                <input v-model="name" type="text" class="form-control" placeholder="Name">
                <input v-model="position" type="text" class="form-control" placeholder="Position">
                <input v-model="salary" type="number" class="form-control" placeholder="Salary">
                <div class="button-block">
                    <button class="btn btn-success">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';

    export default {
        data () {
            return {
                name: '',
                position: '',
                salary: ''
            }
        },
        computed:{
            // ...mapGetters('products',{
            //     productsAll: 'items'
            // }),
            // ...mapGetters('cart',{
            //     productsInCart: 'products'
            // }),
            name(){
                return this.name;
            },
            position(){
                return this.position;
            },
            salary(){
                return this.salary;
            }
        },
        methods:{
            ...mapActions('workers',{
                addWorker: 'addItem'
            }),

            onOrder(){
                this.$router.push('/checkout');
            },
            submbit(){
                console.log('name = ', this.name);
                console.log('position = ', this.position);
                console.log('salary = ', this.salary);

                const newWorker = {
                    name: this.name,
                    position: this.position,
                    salary: this.salary
                };
                this.addWorker(newWorker);
            }
        }
    }
</script>

<style>
    input{
        margin-bottom: 20px;
    }
    .button-block{
        display: flex;
        justify-content: center;
    }
</style>
