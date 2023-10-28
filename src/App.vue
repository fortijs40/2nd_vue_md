<script>
import router from './router';
import { useStore } from './stores/store.js';

export default {
    data() {
        return {
        };
    },
    computed: {
        user() {
            return useStore().user;
        },
    },
    methods: {
    },
    components: { router }
};
</script>
<template>
  <div id="app">
    <router-view v-if="!user.logged_in"></router-view>
    <header class="header">
      <Header/>
    </header>
    <div v-show="user.logged_in" class="grid-container">
      <Navigation />
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  width: 100%;
  height: 100vh;
  background-color: #191621;
}
.grid-container {
  display: grid;
  grid-template-columns: 400px auto;
}
.grid-container > div{
  margin-top: 10px;
  text-align: left;
}

</style>
