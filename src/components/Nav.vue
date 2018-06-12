<template>
  <div>
    <div class="tabbar">
      <div class="tab active" :style="{ left: activeTab * 150 + 'px'}"></div>
      <div v-for="(tab, i) in tabs" :key="i" class="tab" @click="activeTab = i">
        <image class="icon" :src="tab.icon"></image>
        <text class="title">{{tab.title}}</text>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeTab: 0,
        tabs: [{
          title: 'name',
          icon: '//gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png'
        }, {
          title: 'name',
          icon: '//gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png'
        }, {
          title: 'name',
          icon: '//gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png'
        }, {
          title: 'name',
          icon: '//img.alicdn.com/tfs/TB1D4RzQFXXXXcoXpXXXXXXXXXX-45-45.png'
        }, {
          title: 'name',
          icon: '//gw.alicdn.com/tfs/TB1N1.6OVXXXXXqaXXXXXXXXXXX-45-45.png'
        }]
      }
    }
  }
</script>

<style scoped>
  .tabbar {
    flex-direction: row;
    background-color: #425ea5;
  }
  .tab {
    height: 120px;
    width: 150px;
    justify-content: center;
    align-items: center;
  }
  .active {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(100, 100, 100, 0.2);
    transition: left 0.2s ease-in-out;
  }
  .icon {
    width: 45px;
    height: 45px;
  }
  .title {
    font-size: 28px;
    color: #FFF;
    margin-top: 10px;
  }
</style>
