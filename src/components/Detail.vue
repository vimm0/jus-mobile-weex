<!--<template>-->
<!--<div>-->
<!--<video class="video" :src="src" autoplay controls-->
<!--@start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>-->
<!--<text class="info">state: {{state}}</text>-->
<!--</div>-->
<!--</template>-->

<!--<style scoped>-->
<!--.video {-->
<!--width: 630px;-->
<!--height: 350px;-->
<!--margin-top: 60px;-->
<!--margin-left: 60px;-->
<!--}-->
<!--.info {-->
<!--margin-top: 40px;-->
<!--font-size: 40px;-->
<!--text-align: center;-->
<!--}-->
<!--</style>-->

<!--<script>-->
<!--export default {-->
<!--data () {-->
<!--return {-->
<!--state: '&#45;&#45;&#45;&#45;',-->
<!--src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'-->
<!--}-->
<!--},-->
<!--methods:{-->
<!--onstart (event) {-->
<!--this.state = 'onstart'-->
<!--},-->
<!--onpause (event) {-->
<!--this.state = 'onpause'-->
<!--},-->
<!--onfinish (event) {-->
<!--this.state = 'onfinish'-->
<!--},-->
<!--onfail (event) {-->
<!--this.state = 'onfinish'-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->
<template>
    <div class="external-video-detail">
        <div class="external-video-detail__video-container">
            <iframe :src="['http://www.youtube.com/embed/' + videoId]" frameborder="0" allowfullscreen
                    v-if="obj.is_completed"></iframe>
        </div>
        <div class="content video-meta">
            <p class="title">{{ obj.name }}</p>
            <p class="p__release-date">
                Published On: {{ obj.release_date
                }}</p>
            <p class="p__views">
                9,000,000 views</p>
            <p class="p__description" v-if="obj.description">
                {{obj.description}}
                <!--<a class=""-->
                   <!--v-if="obj.description.length > 20"-->
                   <!--@click="showMore = !showMore">Show {{ moreOrLess }}-->
                <!--</a>-->
            </p>
        </div>
    </div>
</template>

<script>

    import Helper from '../mixins/Helper.js'

    export default {
        name: 'ExternalVideoDetail',
        data() {
            return {
                obj: '',
                showMore: false,
                moreOrLess: '',
                videoId: ''
            }
        },
        mixins: [Helper],
        mounted() {
            this.getVideo()
        },
        methods: {
            getVideo() {
                if (this.$route.params.videoId) {
                    global.axios.get('external/video/' + this.$route.params.videoId)
                        .then(({data}) => {
                            // console.log(data)
                            global.Vue.set(this.$data, 'obj', data)
                            this.videoId = data.video_id
                        })
                }
            }
        }
    }
</script>
<style>
    div.video-meta {
        margin: 1rem auto auto 1rem ;
    }

    p.p__release-date {
        color: #999;
    }
    p.title {
        font-size:0.4rem;
    }
    p.p__views {
        font-size: 0.6rem;
    }

    p.p__description {
        overflow: hidden;
        white-space: pre-wrap;
        font-size: .2rem !important;
    }

    .sidebar-video-thumbnail {
        height: 5rem;
        width: 8rem;
    }

    /*Youtube-iframe responsive container*/
    .external-video-detail__video-container {
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 30px;
        height: 0;
        overflow: hidden;
    }

    .external-video-detail__video-container iframe,
    .external-video-detail__video-container object,
    .external-video-detail__video-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

</style>