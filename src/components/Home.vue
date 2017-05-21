<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <my-tunes class="my-tunes"></my-tunes>
    <itunes class="itunes"></itunes>
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
.my-tunes{
  display: inline-block;
  min-height: 500px;
  min-width: 45%;
  background: purple;
}

.itunes{
  display: inline-block;
  background: orange;
  min-height: 500px;
  min-width: 45%;
}

</style>
