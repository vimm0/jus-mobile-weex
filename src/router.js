/*global Vue*/
import Router from 'vue-router'
import WebView from '@/components/WebView'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'WebView',
      component: WebView
    }
  ]
})
