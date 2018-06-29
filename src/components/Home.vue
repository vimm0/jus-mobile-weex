<template>
    <div class="home">
        <list></list>
    </div>
</template>

<script>
    import List from './app/video/VideoList'
    import Slider from './UIComponent/Slider'

    export default {
        name: 'home',
        components: {
            'list': List,
            'slider': Slider
        }
    }
</script>
<style>

</style>