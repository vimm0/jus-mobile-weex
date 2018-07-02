<template>
    <div class="home">
        <!-- <list></list> -->
        <sign-up></sign-up>
        <!-- <sign-in></sign-in> -->
                </div>
</template>

<script>
    import List from './app/video/VideoList'
    import SignUp from './app/user/SignUp'
    import SignIn from './app/user/SignIn'
    import Slider from './UIComponent/Slider'

    export default {
        name: 'home',
        components: {
            // 'list': List,
            'sign-up': SignUp,
            'slider': Slider,
            'sign-in': SignIn
        }
    }
</script>
<style>

</style>