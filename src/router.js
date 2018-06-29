/*global Vue*/
import Router from 'vue-router'
// import WebView from '@/components/WebView'
import Home from '@/components/Home'
import ExternalVideoDetail from '@/components/app/video/detail/ExternalVideoDetail'
import LocalVideoDetail from '@/components/app/video/detail/LocalVideoDetail'
import WatchList from '@/components/app/video/feature/WatchList'
import SignUp from '@/components/app/user/SignUp'
import SignIn from '@/components/app/user/SignIn'
import Profile from '@/components/app/user/Profile'
import Card from '@/components/app/payment/Card'
import Invoice from '@/components/app/payment/Invoice'
import Subscription from '@/components/app/payment/Subscription'
import Error from '@/components/UIComponent/Error'

const scrollBehavior = function (to, from, savedPosition) {
    let position = { x: 0, y: 0 }
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
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/signup',
            name: 'Sign Up',
            component: SignUp
        },
        {
            path: '/signin',
            name: 'Sign In',
            component: SignIn
        },
        {
            path: '/:slugId',
            name: 'External Video Detail',
            component: ExternalVideoDetail
        },
        {
            path: '/:slugId',
            name: 'Local Video Detail',
            component: LocalVideoDetail
        },
        {
            path: '/watchlist',
            name: 'WatchList',
            component: WatchList
        },
        {
            path: '/card',
            name: 'Card',
            component: Card
        },
        {
            path: '/subscription',
            name: 'Subscription',
            component: Subscription
        },
        {
            path: '/invoice',
            name: 'Invoice',
            component: Invoice
        },
        {
            path: '/user/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '*',
            name: 'Error',
            component: Error
        }
    ]
})
