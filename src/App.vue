<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-9">
            <h1>Site</h1>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-2 menu marginRight">
            <ul class="list-group">
              <router-link v-for="(item, index) in menuList"
                           :key="index"
                           :to="item.url"
                           tag="li"
                           class="list-group-item"
                           active-class="active"
                           exact
              >
                <a>{{item.text}}</a>
              </router-link>
            </ul>
          </div>
          <div class="col col-sm-9">
            <transition name="slide" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed:{
            ...mapGetters('menu',{
                menuList: 'items'
            })
        }
    }
</script>

<style scoped>
.marginRight{
    margin-right: 40px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.slide-enter-active{
    animation: slideIn 0.5s;
}

.slide-live-active{
    animation: slideOut 0.5s;
}

@keyframes slideIn{
    from{transform: rotateY(90deg);}
    to{transform: rotateY(0deg);}
}

@keyframes slideOut{
    from{transform: rotateY(0deg);}
    to{transform: rotateY(90deg);}
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>