<template>
    <div class="mytunes">
        <h2>My Tunes</h2>
        <div v-for="song in songs">
        <h3>{{song.trackName}}</h3>
        <h4>{{song.artistName}}</h4>
        <audio controls><source :src='song.previewUrl'></audio>
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
  methods: {}
}
</script>

<style scoped>

</style>