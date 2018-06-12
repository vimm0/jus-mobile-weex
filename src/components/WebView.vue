<template>
    <div>
        <!--<text class="message">Now, let's use Vue.js to build your Weex app.</text>-->
        <!--<div :class="['webview-box', isipx?'web-ipx':'']">-->
            <web ref="wv" class="webview" :src="url"></web>
        <!--</div>-->
    </div>
</template>
<script>
    const webview = weex.requireModule('webview');
    import util from '../util';

    export default {
        data() {
            return {
                url0: 'http://52.202.70.246/',
            }

        },
        created(_e) {
            util.initIconFont();
            this.url = util.getUrlSearch(weex.config.bundleUrl, 'weburl') || this.url0;
            console.log('webPageURL', this.url)
        },
    }
</script>
<style scoped>
    /*.wrapper{*/
    /*position: absolute;*/
    /*left: 0;*/
    /*right:0;*/
    /*bottom: 0;*/
    /*top:0;*/
    /*}*/
    /*.iconfont {*/
    /*font-family:iconfont;*/
    /*}*/
    /*.toolbar{*/
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;right: 0;*/
    /*height: 114px;*/
    /*padding-top: 44px;*/
    /*background-color: #fafafa;*/
    /*opacity: .99;*/
    /*z-index: 101;*/
    /*flex-wrap: nowrap;*/
    /*flex-direction: row;*/
    /*justify-content: space-around;*/
    /*border-bottom-width: 1px;*/
    /*border-bottom-color: #d9d9d9;*/
    /*}*/
    /*.t-ipx{*/
    /*height: 154px;*/
    /*padding-top: 84px;*/
    /*}*/
    /*.tlt{*/
    /*flex: 1;*/
    /*font-size: 36px;*/
    /*padding-top: 10px;*/
    /*color:#333;*/
    /*text-align: center;*/
    /*}*/
    /*.left,.right{*/
    /*height: 68px;*/
    /*width: 150px;*/
    /*padding-top:10px;*/
    /*display: flex;*/
    /*flex-direction: row;*/
    /*flex-wrap: nowrap;*/
    /*justify-content: center;*/
    /*}*/
    /*.left{*/
    /*justify-content: flex-start;*/
    /*padding-left: 20px;*/
    /*}*/
    /*.right{*/
    /*justify-content: flex-end;*/
    /*padding-right: 20px;*/
    /*}*/
    /*.btnTxt{*/
    /*font-size: 40px;*/
    /*width: 70px;*/
    /*color:#666;*/
    /*text-align: center;*/
    /*}*/
    /*.webview-box {*/
    /*position: absolute;*/
    /*top: 114px ;*/
    /*left: 0;*/
    /*right:0;*/
    /*bottom: 0;*/
    /*}*/
    /*.web-ipx{*/
    /*top:154px;*/
    /*}*/
    .webview {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>