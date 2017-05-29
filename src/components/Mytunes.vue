<template>
    <div id="mytunes">
                <h1>Current Playlist:</h1>
                <div v-for="song in songs">
                    <div class="media">
                        <div class="media-body">
                            <h2 class="media-heading">{{song.trackName}}</h2>
                            <h3 class="media-heading">{{song.artistName}}</h3>
                            <h4 class="media-heading">{{song.collection}}</h4>
                            <audio controls><source :src='song.previewUrl'></audio>
                            <button @click="removeTrack(song)">Remove</button>
                            <button @click="promoteTrack(song)">Promote</button>
                            <button @click="demoteTrack(song)">Demote</button>
                        </div>
                    </div>
                </div>
        </div>
</template>

<script>
import Mytunes from '@/services/mytunes-service'

export default {
  name: 'mytunes',
  data(){
    return {
        songs: Mytunes.getTracks()
    }
  },
  computed: {},
  methods: {
        removeTrack(song){
            Mytunes.removeTrack(song)
        },
        promoteTrack(song){
            Mytunes.promoteTrack(song)
        },
        demoteTrack(song){
            Mytunes.demoteTrack(song)
        }  
    }
}
</script>

<style scoped>
h1 {
  font-family: verdana;
  font-size: 23px;
  color: #fff;
  margin-top: 0px;
  margin-bottom: 5px;
  margin: 10px;
  text-transform: none;
}

.media {
  background-color: #fafafa;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
}
button {
  -webkit-border-radius: 5;
  -moz-border-radius: 5;
  border-radius: 5px;
  font-family: Arial;
  color: #ffffff;
  font-size: 14px;
  background: #6f445d;
  padding: 6px 10px 6px 10px;
  margin: 0px;
  text-decoration: none;
  border: none;
}

button:hover {
  background: #635B65;
  text-decoration: none;
}
</style>