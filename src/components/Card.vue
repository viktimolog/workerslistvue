<template>
    <div>
        <h2 v-if="worker._id">{{`${worker.name} card`}}</h2>
        <h2 v-else>New worker card</h2>
        <hr>
        <div class="alert alert-warning">
            <form v-on:submit.prevent="submit">
                <input v-model="name" type="text" class="form-control" placeholder="Name" :disabled="getProtection">
                <input v-model="position" type="text" class="form-control" placeholder="Position" :disabled="getProtection">
                <input v-model="salary" type="number" class="form-control" placeholder="Salary">
                <div class="button-block">
                    <button class="btn btn-success">Save</button>
                    <button type="button" @click="back()" class="btn btn-warning">Back</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import {router} from '../routes';
    import {isProtected} from '../utils/helpers';

    export default {
        data () {
            return {
                name: '',
                position: '',
                salary: '',
                isData: false
            }
        },
        beforeUpdate(){
            if(!this.isData && this.worker){
                this.isData = true;
                this.name = this.worker.name;
                this.position = this.worker.position;
                this.salary = this.worker.salary;
            }
        },
        computed:{
            ...mapGetters('workers',{
                worker: 'item'
            }),
            getProtection(){
                return isProtected(this.worker);
            }
        },
        methods:{
            ...mapActions('workers',{
                addWorker: 'addItem',
                updateWorker: 'updateItem',
            }),
            submit(){
                const newWorker = {
                    name: this.name,
                    position: this.position,
                    salary: this.salary
                };
                if(!this.worker._id){
                    this.addWorker(newWorker);
                }
                else{
                    const updatedWorker = {...this.worker};
                    updatedWorker.name = this.name;
                    updatedWorker.position = this.position;
                    updatedWorker.salary = this.salary;
                    this.updateWorker(updatedWorker);
                }
            },
            back(){
                router.push({ name: 'workers' });
            },
        }
    }
</script>
<style>
    input{
        margin-bottom: 20px;
    }
    .button-block{
        display: flex;
        justify-content: space-around;
    }
</style>
