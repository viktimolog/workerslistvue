<template>
    <div>
        <h1>{{worker.name}}</h1>
        <router-link :to="{name: 'workers'}">Back to Workers List</router-link>
        <hr>
        <div class="alert alert-success">
            {{worker.position}}
        </div>
        <div class="alert alert-success">
            {{worker.salary}}
        </div>
        hw: add to cart
        <div class="redText">It is red text</div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import './Styles/workerStyles.css';

    export default {
        computed:{
            ...mapGetters('workers',{

            }),
            id(){
                return this.$route.params.id;
            },
            worker(){
                return this.$store.getters['workers/item'](this.id);
            }
        }
    }
</script>

<!--<style>-->
    <!--.base{-->
        <!--text-align: left;-->
        <!--/*margin-left: 33%;*/-->
    <!--}-->
    <!--#app {-->
        <!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
        <!-- -webkit-font-smoothing: antialiased;-->
        <!-- -moz-osx-font-smoothing: grayscale;-->
        <!--/*text-align: center;*/-->
        <!--color: #2c3e50;-->
        <!--margin-top: 60px;-->
    <!--}-->

    <!--h1, h2 {-->
        <!--font-weight: normal;-->
    <!--}-->

    <!--ul {-->
        <!--list-style-type: none;-->
        <!--padding: 0;-->
    <!--}-->

    <!--li {-->
        <!--display: inline-block;-->
        <!--margin: 0 10px;-->
    <!--}-->

    <!--a {-->
        <!--color: #42b983;-->
    <!--}-->
<!--</style>-->
