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
    import Nav from './Nav'
    import List from './List'
    import Slider from './Slider'
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