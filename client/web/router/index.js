import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import home from '../views/home'

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    }
  ]
})