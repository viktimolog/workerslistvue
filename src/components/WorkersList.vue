<template>
<div>
<div class="col col-sm-9">
<h1>{{getTitle}}</h1>
</div>
    <div class="col col-sm-3">
    <button
            class="btn btn-primary button"
            @click="switchWorker('new')">
        {{getBtnTitle}}
    </button>
    </div>
    <div class="row">
        <table class="table table-border table-hover">
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
                    <button @click="switchWorker(worker._id)"
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
    </div>
</div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import Card from './Card';
    import {router} from '../routes';
    import './Styles/workersListStyles.css';

    export default {
        components: { Card },

        data () {
            return {
                title: 'Workers list',
                btnTitle: 'Add new worker',
            }
        },
        computed:{
            ...mapGetters('workers',{
                workers: 'items'
            }),
            getTitle(){
                return this.title;
            },
            getBtnTitle(){
                return this.btnTitle;
            }
        },
        methods:{
            ...mapActions('workers',{
                delWorker: 'delItem'
            }),
            switchWorker(id){
                router.push({ name: 'worker', params: { id }});
            }
        }
    }
</script>
