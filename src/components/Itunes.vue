<template>
    <div class="itunes">
		<div class="row">
			<div class="col-xs-12">
                <h1 class="text-center">Music Studio</h1>
            </div>
		</div>
		<div class="row">
            <div class="col-xs-12 text-center">
				<form class="form-inline" @submit.prevent="search">
					<div class="form-group">
          				<input type="text" class="form-control" v-model="query" placeholder="Artist Name"> 
          				<button type="submit" class="btn btn-primary">Find the Beat</button>
					</div>
				</form>
			</div>
		</div>
		<div class="row">
            <div class="col-xs-12 col-md-8 col-md-offset-2">
				<div v-for="song in this.songs">
					<div class="media">
                    	<div class="media-left">
							<img :src="song.artworkUrl100">
						</div>
						<div class="media-body">
							<h2>{{song.trackName}}</h2>
							<h3>{{song.artistName}}</h3>
							<h4>Album: {{song.collectionName}}</h4>
							<h5>${{song.collectionPrice}}</h5>
						</div>
							<div class="media-right">
                      			<audio controls><source :src='song.previewUrl'></audio><br>
								<button type="button" class="add pull-right" @click="addTrack(song)">Add to Playlist</button>
                  			</div>
		  			</div>
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
	ready: function() {
    $(".menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  },
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
h2 {
  font-family: verdana;
  font-size: 23px;
  color: #6f445d;
  margin-top: 0px;
  margin-bottom: 5px;
}

h3 {
  font-family: verdana;
  font-size: 16px;
  color: #635B65;
  margin-top: 0px;
  margin-bottom: 7px;
}

h4 {
  font-family: verdana;
  font-size: 14px;
  color: #8A8A8A;
  margin-top: 0px;
  margin-bottom: 7px;
}

h5 {
  font-family: verdana;
  font-size: 14px;
  color: #8A8A8A;
  margin-top: 5px;
}

img {
  padding-right: 10px;
}

.media {
  background-color: #fafafa;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.form-group {
  padding-bottom: 25px;
}

.form-control {
  height: 45px;
  margin-bottom: 5px;
  border: 1px solid #fff;
}

input.form-control {
  width: 175px;
}

.btn-primary {
  color: #fff;
  font-family: Carme;
  font-size: 18px;
  padding: 10px 25px;
  margin-bottom: 5px;
  background-color: #000;
  border: 0px solid #fff;
}

.btn-primary:active {
  background-color: #000;
}

.btn-primary:hover {
  background-color: #6f445d;
}

.add {
  color: #fff;
  font-family: Carme;
  font-size: 14px;
  padding: 8px 16px;
  margin-bottom: 5px;
  background-color: #6f445d;
  border: 0px solid #fff;
  border-radius: 5px;
}
.add:hover {
  background-color: #635B65;
}

</style>