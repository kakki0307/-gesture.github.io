// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { routes } from './routers'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes, // Same as "routes: routes”
  mode: 'history' // No hash tag style in URL
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
