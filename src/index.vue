<template>
    <div class="wrapper">
        <router-view/>
    </div>
</template>

<script>
    import Nav from './components/Nav.vue'
    import axios from 'axios'
    import config from '../configs/config'
    import Vue from 'vue'

    export default {
        name: 'App',
        data() {
            return {}
        },
        components: {
            'nav': Nav
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

<style scoped>
    /*.wrapper {*/
    /*justify-content: center;*/
    /*align-items: center;*/
    /*}*/
</style>
