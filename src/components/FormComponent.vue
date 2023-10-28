<template>
    <div class="form">
    <div class="input-row">
      <label class="inputLabel" for="first_name">First name</label>
      <input class="inputField" type="text" id="first_name" v-model="useStore().user.first_name" :disabled="isDisabled" />
    </div>
    <div class="input-row">
      <label class="inputLabel" for="last_name">Last name</label>
      <input class="inputField" type="text" id="last_name" v-model="useStore().user.last_name" :disabled="isDisabled" />
    </div>
    <div class="input-row">
      <label class="inputLabel" for="student_code">Student code</label>
      <input class="inputField" type="text" id="student_code" v-model="useStore().user.student_code" :disabled="isDisabled" />
    </div>
    <div class="logged-in-at">
      <label class="inputLabel" id="loggedAt">Logged in at</label>
      <div class="timestamps" v-for="timestamp in useStore().user.logged_at" :key="timestamp">{{ timestamp }}</div>
    </div>
  </div>
</template>
<script>
import { useStore } from '@/stores/store.js';
  export default{
    setup(){
      return { useStore };
    },
    props: ['isDisabled']
  }
</script>
<style>

.timestamps{
  margin-top: 20px;
  color: #544F69;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.inputField{
  width: 366px;
  height: 42px;
  border-radius: 4px;
  border: none;
  background: #464157;
  font-size: 18px;
  padding-left: 20px;
  color: #FFFFFF;
}
.inputField:disabled{
  background-color: #22202B;
  color: #FFFFFFB2;
}
.input-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 20%;
}
.inputLabel{
  color: rgba(255, 255, 255, 0.50);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
  
}
</style>