<template>
    <div class="itunes">
		<div class="panel panel-default text-center">
  		<div class="panel-heading">Browse Songs</div>
  		<div class="panel-body">
          <input type="text" v-model="query" placeholder="Artist Name"> 
          <button @click="search">Search</button>
  		</div>
		</div>
		<div class="panel panel-default">
  		<div class="panel-body">
			<div v-for="song in this.songs">
				<h4>{{song.trackName}}</h4>
				<h5>{{song.artistName}}</h5>
				<h6>{{song.collectionPrice}}</h6>
				<audio controls><source :src='song.previewUrl'></audio><br>
				<button type='button' @click="addTrack(song)">Add to Playlist</button>
			</div>
  		</div>
		</div>
    </div>
</template>


<script>
import Itunes from '@/services/itunes-service'
import Mytunes from '@/services/mytunes-service'

export default {
    name: 'itunes',
    data() {
        return {
            query: '',
			songs: {}
        }
    },
    computed: {},
    methods: {
        search() {
        	Itunes.getMusicByArtist(this.query).then(res=>{
        	let resObj = JSON.parse(res)
        	this.songs = resObj.results
        	})
    	},
		addTrack(song) {
			//debugger
        	Mytunes.addTrack(song)
		}
    }
}
</script>


<style scoped>
.panel {
  border: 0px;
  background-color: #c0c5ce;
	box-shadow: none;
}

.panel .panel-heading {
  border: 0px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
	font-family: helvetica;
	font-size: 20px
}
</style>