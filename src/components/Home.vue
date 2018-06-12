<template>
    <div class="home">
        <header>
            <nav></nav>
        </header>
        <!--<slider></slider>-->
        <list></list>
    </div>
</template>

<script>
    import Nav from './UIComponent/Nav'
    import List from './app/video/VideoList'
    import Slider from './UIComponent/Slider'
    export default {
        name: 'home',
        components: {
            'nav': Nav,
            'list': List,
            'slider': Slider
        }
    }
</script>
<style>

</style>