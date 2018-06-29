<template>
    <div class="wrapper">
        <header style="background:#fff;">
            <layout></layout>
        </header>
        <router-view/>
    </div>
</template>

<script>
    // import Nav from './components/UIComponent/Nav.vue'
    import Layout from './components/app/Layout.vue'
    import axios from 'axios'
    import config from '../configs/config'
    import Vue from 'vue'

    export default {
        name: 'App',
        data() {
            return {
                view: ''
            }
        },
        components: {
            // 'nav': Nav,
            'layout': Layout
        },
        created() {
            axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
            axios.defaults.xsrfCookieName = 'csrftoken'
            axios.defaults.baseURL = config.build.apiBaseURL
            global.axios = axios
            global.Vue = Vue
        }
    }
</script>