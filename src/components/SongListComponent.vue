<template>
    <div class="songListdiv">
      <div class="filter">
        <SongFilter/>
      </div>
      <table id="songTable">
      <thead id="songListHead">
        <tr id="headText">
          <th id="songHead">Name</th>
          <th id="artistHead">Artist</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="song in useStore().allSongs" id="songText">
          <td id="songName">{{ song.song }}</td>
          <td id="artist">{{ song.artist }}</td>
        </tr>
      </tbody>
    </table>
    </div>
</template>
<script>
  import { useStore } from '@/stores/store.js';
  export default{
    setup(){
      return { useStore };
    },
  }
</script>
<style>
#songHead, #artistHead{
  font-size:20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
#songName{
  color: white;
  font-size: 20px;
  font-weight: 500;
  padding-top: 20px;
}
#artistHead{
  padding-left: 170px;

}
#artist{
  color: rgba(255, 255, 255, 0.80);
  font-size: 20px;
  font-weight: 500;
  padding-top: 20px;
}
#songListHead{
  color: #464157;
  border-bottom: 2px solid #464157;
  font-size: 16px;
  font-weight: 700;
}
#songTable{
  width: 95%;
  border-collapse: collapse;
}
</style>