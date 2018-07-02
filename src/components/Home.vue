<template>
    <div class="home">
        <template v-if="checkUserLogin()">
            <header style="background:#fff;">
            <layout></layout>
                <list></list>
            </header>
        </template>
        <template v-else>
            <!-- <sign-up></sign-up> -->
            <sign-in></sign-in>
        </template>
    </div>
</template>

<script>
    import Layout from "./app/Layout.vue";
    import List from './app/video/VideoList'
    import SignUp from './app/user/SignUp'
    import SignIn from './app/user/SignIn'
    import Slider from './UIComponent/Slider'
    import Helper from '../mixins/Helper'
    export default {
        name: 'home',
        components: {
            'layout': Layout,
            'list': List,
            'sign-up': SignUp,
            'slider': Slider,
            'sign-in': SignIn
        },
        mixins: [Helper]
    }
</script>
<style>

</style>