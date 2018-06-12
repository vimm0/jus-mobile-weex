/*global Vue*/
import Router from 'vue-router'
// import WebView from '@/components/WebView'
import Home from '@/components/Home'
import ExternalVideoDetail from '@/components/app/video/detail/ExternalVideoDetail'
import LocalVideoDetail from '@/components/app/video/detail/LocalVideoDetail'

Vue.use(Router)
module.exports = new Router({
    // mode: 'history',
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
            path: 'external/detail:videoId',
            name: 'External Video Detail',
            component: ExternalVideoDetail
        },
        {
            path: 'local/detail:videoId',
            name: 'Local Video Detail',
            component: LocalVideoDetail
        }
    ]
})
