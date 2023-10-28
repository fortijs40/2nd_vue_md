
<template>
    <div class="landingScreen">
      <div style="width: 100%; height: 100%; position: relative">
        <div class="text">
          <span class="txt-white">WE<br/></span>
          <span class="txt-red">LOVE<br/></span>
          <span class="txt-white">MUSIC</span>
          <div class="spotif-txt" style="left: 5px; top: 500px; position: absolute">
            <span style="color: #544F69; font-size: 20px; font-weight: 600; word-wrap: break-word">POWERED BY </span>
            <span style="color: #67FF64; font-size: 20px; font-weight: 700; word-wrap: break-word">SPOTIFY API</span>
          </div>
        </div>
    </div>
    </div>
  </template>
<style>
.landingScreen {
  background: url("../assets/background.png"), lightgray 50% / cover no-repeat;
  height: 100vh;
  z-index: 0;
  background-size: cover;
}
.text{
  position: absolute;
  top: 25%;
  left: 5%;
}
.txt-white{
  color: #FFF;
font-size: 128px;
font-style: normal;
font-weight: 900;
line-height: normal;
}
.txt-red{
  color: #FB0048;
font-size: 128px;
font-style: normal;
font-weight: 900;
line-height: normal;
}
  
</style>