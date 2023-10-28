<template>
  <nav>
    <router-link to="/home">
      <button :class="{ active: this.$route.name === 'home' }" id="home">HOME</button>
    </router-link>
    <router-link to="/about">
      <button :class="{ active: this.$route.name === 'about' }">ABOUT ME</button>
    </router-link>
  </nav>
</template>

<script>
import { useStore } from '@/stores/store.js';
export default {
};
</script>

<style scoped>
nav {
  width: 100%;
  background: #22202B; 
  border-right: 1px #544F69 solid;
  display: flex;
  margin-top: 70px;
  height: 964px;
  flex-direction: column;
}
#home {
  margin-top: 20px;
}
button {
  color: white;
  text-align: left;
  font-weight: bold;
  margin-left: 20px;
  padding: 10px 20px;
  width: 90%;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
}

.active {
  background-color: rgb(107, 0, 207);
}
</style>