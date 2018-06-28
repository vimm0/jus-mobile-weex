/*global Vue*/
import Router from 'vue-router'
// import WebView from '@/components/WebView'
import Home from '@/components/Home'
import ExternalVideoDetail from '@/components/app/video/detail/ExternalVideoDetail'
import LocalVideoDetail from '@/components/app/video/detail/LocalVideoDetail'

const scrollBehavior = function (to, from, savedPosition) {
    let position = {x: 0, y: 0}
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(position)
        }, 10)
    })
}

Vue.use(Router)
module.exports = new Router({
    // mode: 'history',
    scrollBehavior,
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
            path: ':slugId',
            name: 'External Video Detail',
            component: ExternalVideoDetail
        },
        {
            path: ':slugId',
            name: 'Local Video Detail',
            component: LocalVideoDetail
        }
    ]
})
