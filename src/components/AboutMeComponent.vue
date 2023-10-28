<template>
    <div class="aboutMe">
      <h1 id="aboutTXT">ABOUT ME</h1>
      <button id="formBut" @click="toggleEditForm" :class="{ activeForm: isActive }" > {{ isActive ? 'CANCEL':'EDIT FORM'}}</button>
    </div>
    <Form :isDisabled="isDisabled" />
  </template>
  
  <script>
  export default {
    data() {
      return {
        isActive: false,
        isDisabled: true,
      };
    },
    methods: {
      toggleEditForm() {
        this.isActive = !this.isActive;
        this.isDisabled = !this.isActive;
      },
    },
};
  </script>
<style>
  #formBut{
    margin-top: 7px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    background-color: #8645E8;
    border: none;
    border-radius: 50px;
    width: 120px;
    height: 40px;
    margin-left: 20px;
  }
  .aboutMe #formBut.activeForm{
    background-color: #391372;
    color: #D7B8FF;
    font-size: 16px;
    font-weight: 700;
    border: none;
  }
  .aboutMe{
    display: inline-flex;
    justify-items: center;
    margin-bottom: 50px;
  }
  #aboutTXT{
      color: white;
      font-weight: bold;
      border-right: 2px solid #544F69;
      padding-right: 20px;
  }
  
  
</style>  