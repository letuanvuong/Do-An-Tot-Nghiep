import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import {store} from './modules/store'
import navbar from './modules/navigation/index.js'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  ...navbar
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
