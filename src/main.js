import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from '@/router/index.js'

import './assets/tailwind.css'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: Routes,
  mode: "history"
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
