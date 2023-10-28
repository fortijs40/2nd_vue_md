<template>
  <div class="flex-container">
    <p id="sort">Sort by:</p>
    <button :class="['songBut', { activeFilter: activeButton === 'none' }]" @click="[setActiveButton('none'),sortSongs('none')]">None</button>
    <button :class="['songBut',{ activeFilter: activeButton === 'name' }]" @click="[setActiveButton('name'),sortSongs('name')]">Name</button>
    <button :class="['songBut',{ activeFilter: activeButton === 'artist' }]" @click="[setActiveButton('artist'),sortSongs('artist')]">Artist</button>
  </div>
</template>
<script>
  import { useStore } from '@/stores/store.js';
  export default {
    
    data() {
      return {
        activeButton: 'none',
        unsortedSongs: [],
      };
    },
    created() {
      this.unsortedSongs = JSON.parse(JSON.stringify(useStore().allSongs));
    },
    methods: {
      setActiveButton(button) {
        this.activeButton = button;
      },
      sortSongs(filter){
        if(filter === 'name'){
          useStore().allSongs.sort((a, b) => a.song.localeCompare(b.song));
        }else if(filter === 'artist'){
          useStore().allSongs.sort((a, b) => a.artist.localeCompare(b.artist));
        }else{
          useStore().allSongs = this.unsortedSongs;
        }
      },
    },
  };
</script>
<style>

.songBut{
  color: #FFFFFFCC;
  background-color: transparent;
  width: 67px;
  height: 25px;
  font-size: 16px;
  font-weight: 700;
  margin-left: 20px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
}
.activeFilter{
  background: rgba(251, 0, 72, 0.20);
  color: #FB0048;
}
.flex-container{
  display: inline-flex;
  justify-content: center;
  margin-top: 50px;
}
#sort{
  color: rgba(255, 255, 255, 0.80);
  font-size: 16px;
  font-weight: 700;
}
</style>