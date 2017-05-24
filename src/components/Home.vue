<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <itunes class="itunes"></itunes>
        </div>
        <div class="col-xs-12 col-md-6">
          <mytunes class="mytunes"></mytunes>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Itunes from './Itunes'
import Mytunes from './Mytunes'

export default {
  name: 'home',
  components: {
    Itunes,
    Mytunes
  },
  data () {
    return {
      
    }
  }
}
</script>


<style>
/**
* YOU SHOULD PROBABLY MAKE THIS LOOK BETTER :)
* BOOTSTRAP IS FOR THE WEAK FLEXBOX IS KING
* -- McCall
**/
/*.mytunes{
  min-height: 500px;
  background: #a7adba;
}

.itunes{
  background: #c0c5ce;
  min-height: 500px;
}*/

</style>
