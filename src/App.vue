<template>
  <div class="container-fluid" id="app">
    <CardDeck title="Our cognitive biases" source="https://yourbias.is" :rawData="biasData"/>
    <CardDeck title="Our logical fallacies" source="https://yourfallacy.is" :rawData="fallacyData"/>
  </div>
</template>

<script>
import CardDeck from './components/CardDeck.vue'

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
    CardDeck
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
  margin-top: 60px;
}

</style>
