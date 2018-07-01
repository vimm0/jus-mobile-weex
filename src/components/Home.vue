<template>
    <div class="home">
        <!-- <list></list> -->
        <sign-up></sign-up>
    </div>
</template>

<script>
    import List from './app/video/VideoList'
    import SignUp from './app/user/SignUp'
    import Slider from './UIComponent/Slider'

    export default {
        name: 'home',
        components: {
            // 'list': List,
            'sign-up': SignUp,
            'slider': Slider
        }
    }
</script>
<style>

</style>