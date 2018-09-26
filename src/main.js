// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import App from './App'
import storeOptions from './store/store'
import routerOptions from './router/router'

Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter(routerOptions)
const store = new Vuex.Store(storeOptions)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
