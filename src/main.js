import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import { routes } from './routes'
import { store } from './store/index'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://vue-http-e1211.firebaseio.com/'

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
