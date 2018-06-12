/*global Vue*/
import Router from 'vue-router'
// import WebView from '@/components/WebView'
import Home from '@/components/Home'
import Detail from '@/components/Detail'

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
        },
        {
            path: '/detail:videoId',
            name: 'Detail',
            component: Detail
        }
    ]
})
