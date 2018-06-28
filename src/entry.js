/*global Vue*/

/* weex initialized here, please do not move this line */
const router = require('./router');
const App = require('@/index.vue');
import '../node_modules/vue-dplayer/dist/vue-dplayer.css'
import fontawesome from '@fortawesome/fontawesome'
import {
  faUser
} from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faUser)

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/');

