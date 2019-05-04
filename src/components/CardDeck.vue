<template>
  <div class="container-fluid" id="app">
    <h1>{{title}}</h1>
    <p class="text-muted">A light version of <a :href="source">{{source}}</a></p>
    <div class="card-deck" v-for="row in data" :key="row.slug">
    <div class="card my-3" v-for="item in row" v-bind:key="item.slug" :title="item.title">
      <div class="card-body">
        <h4 class="card-title">{{titleCase(item.title)}}</h4>
        <p class="card-subtitle my-3">{{item.first}}</p>

        <p class="item-example">{{item.exampleText}}</p>
      </div>
      <div class="card-footer">
        <b-button v-b-modal="item.slug">Show description</b-button>

        <b-modal :id="item.slug" :title="titleCase(item.title)" :okOnly="true">
          <p class="my-4">{{item.description}}</p>
        </b-modal>
        
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Case from 'case'

const _array = require('lodash/array')

export default {
  name: 'app',
  components: {
  },
  created (){
  },
  props: {
    title: String,
    source: String,
    rawData: Array
  },
  data () {
    return {
      ncol: 4
    }
  },
  computed: {
    data () {
      return _array.chunk(this.rawData, this.ncol)
    }
  },
  methods: {
    titleCase: foo => Case.title(foo)
  }
}
</script>

<style>

.item-example {
  font-weight: 100;
  font-size: 80%;
  /* font-style: italic; */
}
</style>
