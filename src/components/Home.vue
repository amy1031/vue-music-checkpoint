<template>
  <div class="home">
    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
      <nav id="menu">
          <mytunes class="mytunes"></mytunes>
      </nav>
      <main id="panel">
        <header>
          <div>
            <button class="toggle-button btn btn-primary"><span class="glyphicon glyphicon-align-justify" aria-hidden="true"></span></button>
          <div id="page-content-wrapper">
            <div class="container-fluid align-middle">
              <itunes class="itunes"></itunes>
            </div>
          </div>
          </div>
        </header>
      </main>
    </Slideout>
  </div>
</template>

<script>
import Itunes from './Itunes'
import Mytunes from './Mytunes'
import Slideout from 'vue-slideout'

export default {
  name: 'home',
  components: {
    Itunes,
    Mytunes,
    Slideout
  },
  data () {
    return {
      
    }
  },
    methods: {
    open: function () {
      //console.log('slideoutOpen')
    }
  }
}
</script>


<style>
body {
    width: 100%;
    height: 100%;
    margin: 0;
  }
 
  .slideout-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 256px;
    height: 100vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 0;
    display: none;
    background-color: #1D1F20;
    color: white;
  }
 
  .slideout-menu-left {
    left: 0;
  }
 
  .slideout-menu-right {
    right: 0;
  }
 
  .slideout-open,
  .slideout-open body,
  .slideout-open .slideout-panel {
    overflow: hidden;
        -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
 
  .slideout-open .slideout-menu {
    display: block;
        -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
.btn-primary:active {
    background-color: #635B65;
    box-shadow: none;
}
.btn-primary:active:focus {
  color: #ffffff; 
  background-color: #635B65; 
  border-color: #635B65;
}
</style>
