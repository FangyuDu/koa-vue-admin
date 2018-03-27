import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import elementUI from 'element-ui'
Vue.use(elementUI)

import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$http = axios
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: {
    App
  }
})