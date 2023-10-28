<script>
  import { useStore } from '@/stores/store.js';
  import router from '@/router';
  export default {
    data() {
      return {
      };
    },
    computed: {
        full_name() {
        return `${this.user.first_name} ${this.user.last_name}`;
        },
        user() {
            return useStore().user;
        }

      },
    methods: {
      toggleLoginStatus() {
        if (this.user.logged_in) {
          if (confirm("Do you want to log out?")) {
            useStore().resetProperties();
            router.push('/');
          }
        } else {
          if (confirm("Do you want to log in?")) {
            useStore().changeLoginStatus();
            router.push('/home');
          }
        }
      },
    },
  };
</script>
<template>
    <header :style="{ backgroundColor: user.logged_in ? '#8645E8' : 'rgb(0, 0, 0, 0.6)' }">
      <div class="values">
        <div class="logoAndName">
          <img src="@/assets/wlogo.svg" alt="Logo" id="logo" />
          <h1 id="siteName">BIG PAPA KRAKEN</h1>
        </div>
        <div class="rightside">
          <div v-if="user.logged_in" class="user-info">
            <div class="avatar"></div>
            <div id="fullname">{{ full_name }}</div>
          </div>
          <button :style="{ backgroundColor: user.logged_in? '#391372':'#8645E8', color: user.logged_in?'#D7B8FF':'#1C073A'}" id="logButton" @click="toggleLoginStatus">{{ user.logged_in? 'LOGOUT' : 'LOGIN' }}</button>
        </div>
      </div>
    </header>
  </template>
  <style>
  #siteName{
    color: white;
    font-size: 30px;
    font-weight: 700;
  }
  #logo{
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
  .logoAndName{
    display: flex;
    align-items: center;
  }
  #fullname {
    font-size: 20px;
    font-weight: 500;
    color:white;
  }
  .user-info{
    display: flex;
    padding-right: 10px;
    height: 30px;
    border-right: 2px solid white;
    align-items: center;
  }
  .rightside {
    display: flex;
    height: 40px;
    align-items: center;
  }
  .values{
    padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  header {
    transition: background-color 0.5s ease;
    width: 100%;
    justify-content: space-between;
  }
  #logButton{
    margin-left : 10px;
    padding: 8px 40px;
    background-color: rgb(130, 20, 219); 
    border: none;
    border-radius: 14px;
    cursor: pointer;
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 16px;
  }
  .avatar {
    background-color: rgb(133, 141, 141);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    border: 2px solid white;
  }
  .header{
    position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  }
  
  
  </style>

  