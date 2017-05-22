<template>
    <div class="itunes">
			<div class="panel panel-default text-center">
  			<div class="panel-heading">Browse Songs</div>
  			<div class="panel-body">
          <input type="text" v-model="list" placeholder="Artist Name"> 
        	<button @click="search">Search</button>
  			</div>
			</div>
			<div class="panel panel-default">
  			<div class="panel-body">
					<div v-for="song in songs">
						<h6>{{song.artistName}}</h6>
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
            list: '',
						songs: {}
        }
    },
    computed: {},
    methods: {
        search() {
        	Itunes.getMusicByArtist(this.list).then(res=>{
        	let resObj = JSON.parse(res)
        	this.songs = resObj.results
        })
    	}
    }
}
</script>


<style scoped>
.panel {
  border: 0px;
  background-color: orange;
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