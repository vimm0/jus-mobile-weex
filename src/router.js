/*global Vue*/
import Router from 'vue-router'
// import WebView from '@/components/WebView'
import Home from '@/components/Home'

Vue.use(Router)

module.exports = new Router({
    routes: [
        // {
        //     path: '/',
        //     name: 'WebView',
        //     component: WebView
        // },
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
})
