import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import CardDeck from './components/CardDeck.vue'
import Home from './components/Home.vue'

import biasData from '../bias.json'
import fallacyData from '../fallacies.json'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/biases', component: CardDeck, props: {rawData: biasData, title:"Our cognitive biases", source:"https://yourbias.is"} },
  { path: '/fallacies', component: CardDeck, props: {rawData: fallacyData , title:"Our logical fallacies", source:"https://yourfallacy.is"}}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
