<!--<template>-->
    <!--<list>-->
        <!--<cell v-for="char in lists" :key="char">-->
            <!--<div class="panel">-->
                <!--<text class="text">{{char}}</text>-->
            <!--</div>-->
        <!--</cell>-->
    <!--</list>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--data () {-->
<!--return {-->
<!--lists: [-->
<!--'A', 'B', 'C', 'D',-->
<!--'E', 'F', 'G'-->
<!--]-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.panel {-->
<!--width: 600px;-->
<!--height: 320px;-->
<!--margin-left: 75px;-->
<!--margin-top: 35px;-->
<!--margin-bottom: 35px;-->
<!--flex-direction: column;-->
<!--justify-content: center;-->
<!--border-width: 4px;-->
<!--border-style: solid;-->
<!--border-color: rgb(79, 192, 141);-->
<!--background-color: rgba(79, 192, 141, 0.2);-->
<!--}-->
<!--.text {-->
<!--font-size: 160px;-->
<!--text-align: center;-->
<!--color: #41B883;-->
<!--}-->
<!--</style>-->
<template>
    <video-list :endPoint="this.$options.endpoint">
        <template slot="results" slot-scope="res">
            <div class="columns home-container__div__chunked-video"
                 v-for="video in res.results.slice(0,8)" :key="video.id">
                <div class="column is-one-quarter a__video-card" v-for="obj in video" :key="obj.id"
                     v-if="obj.is_completed">
                    <template v-if="obj.is_local">
                        <router-link :to="{ name: 'Local Video Detail', params: { videoId: obj.id } }"
                                     class="a__video-card">
                            <figure class="image">
                                <img :src="obj.pic" class="video-image">
                                <span class="span__duration">{{ obj.duration }}</span>
                            </figure>
                            <div class="m-1 video-meta">
                                <div class="div__inner-video-meta">
                                    <div class="has-text-weight-bold is-size-6">{{ obj.name }}</div>
                                    <span class="is-size-7">{{ obj.created }}</span>
                                </div>
                            </div>
                        </router-link>
                    </template>
                    <template v-else>
                        <router-link :to="{ name: 'External Video Detail', params: { videoId: obj.id } }"
                                     class="a__video-card">
                            <figure class="image">
                                <img :src="obj.pic" class="video-image">
                                <span class="span__duration">{{ obj.duration }}</span>
                            </figure>
                            <div class="m-1 video-meta">
                                <div class="div__inner-video-meta">
                                    <div class="has-text-weight-bold is-size-6 is-size-7-touch is-size-7-mobile">
                                        {{ obj.name }}
                                    </div>
                                    <span class="is-size-7 is-size-7-touch is-size-7-mobile">{{ obj.created }}</span>
                                </div>
                            </div>
                        </router-link>
                    </template>
                </div>
            </div>
        </template>
    </video-list>
</template>
<script>
    import Collection from './Collection'
    import Helper from '../mixins/Helper'

    export default {
        name: 'home',
        data() {
            return {
                videosObject: '',
                hideButton: true
            }
        },
        components: {
            'video-list': Collection
        },
        endpoint: 'video/?page_size=0',
    }
</script>