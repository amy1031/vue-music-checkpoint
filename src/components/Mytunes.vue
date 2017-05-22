<template>
    <div class="mytunes">
        <h2>My Tunes</h2>
    </div>
</template>

<script>
import Mytunes from '@/services/mytunes-service'

export default {
  name: 'mytunes',
  data(){
    return {
        tracks: Mytunes.getTracks()
    }
    
  },
  computed: {},
  methods: {
  },
  components: {}
}
</script>

<style scoped>

</style>