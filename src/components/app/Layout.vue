<template>
  <div>
   <div class="navigation">
      <wxc-icon class="nav-weex-icon" name="back" @wxcIconClicked="backIconClicked" style={color:red,fontSize:60px}></wxc-icon>
      <p class="nav-home" @click="userIconClicked"><i class="fas fa-user"></i></p>
   </div>
    <wxc-popup width="500"
               pos="left"
               :show="isShow"
               @wxcPopupOverlayClicked="overlayClicked">
                 <div class="container">
    <div class="demo">
         <wxc-cell
                title="PROFILE"
                :has-arrow="true"
                link="https://h5.m.taobao.com/trip/home/index.html"
                @wxcCellClicked="wxcCellClicked"
                :has-top-border="false"></wxc-cell>
      <wxc-cell
                title="WATCHLIST"
                :has-arrow="true"
                @wxcCellClicked="wxcCellClicked"
                spm="181.12312312.12312.d01"
                :has-top-border="false"></wxc-cell>               
      <wxc-cell title="CARD"
                :has-arrow="true"
                :has-top-border="true"></wxc-cell>
      <wxc-cell title="SUBSCRIPITION"
                :has-arrow="true"
                :has-top-border="true"></wxc-cell>
      <wxc-cell title="INVOICE"
                :has-arrow="true"
                :has-top-border="true"></wxc-cell>
    </div>
    <!-- <div class="demo">
      <text class="demo-title">Custom slot</text>
      <wxc-cell title="Title text"
                :has-arrow="false"
                :has-top-border="true">
        <switch slot="value"></switch>
      </wxc-cell>
    </div> -->
  </div>
    </wxc-popup>
  </div>
</template>

<script>
import { WxcButton, WxcPopup, WxcIcon, WxcCell } from "weex-ui";
// import WxcPopup from 'weex-ui/packages/wxc-popup';
module.exports = {
  components: { WxcButton, WxcPopup, WxcIcon, WxcCell },
  data: () => ({
    isShow: false
  }),
  methods: {
    backIconClicked() {
      this.$router.push({ path: "/" });
    },
    userIconClicked() {
      this.isShow = true;
    },
    overlayClicked() {
      this.isShow = false;
    },
    wxcCellClicked(e) {
      console.log(e);
    }
  }
};
</script>
<style>
svg:not(:root).svg-inline--fa {
  color: rgb(102, 102, 102);
}
.svg-inline--fa.fa-w-14 {
  font-size: 0.6rem;
  color: rgb(102, 102, 102);
}
.navigation {
  display: inline;
}
.nav-weex-icon {
  margin: 0;
  padding: 0;
}
.fas {
  float: left;
}
</style>