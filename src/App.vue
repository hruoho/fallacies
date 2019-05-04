<template>
  <div class="container-fluid" id="app">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

import biasData from '../bias.json'
import fallacyData from '../fallacies.json'

export default {
  name: 'app',
  data () {
    return  {
      biasData,
      fallacyData
    }
  },
  components: {
    Nav
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
