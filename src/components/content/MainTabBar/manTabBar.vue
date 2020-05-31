<template>
  <tab-bar>
  <tab-bar-item path="/home" >
    <img slot="item-icon" src="~assets/img/tabbar/shouye.svg" alt="">
    <img slot="item-icon-action" src="~assets/img/tabbar/shouye_hover.svg" alt="">
    <div slot="item-text">首页</div>
  </tab-bar-item>
  <tab-bar-item path="/category" activeColor="red">
    <img slot="item-icon" src="" alt="~assets/img/tabbar/fenlei.svg">
    <img slot="item-icon-action" src="~assets/img/tabbar/fenlei_hover.svg" alt="">
    <div slot="item-text">分类</div>
  </tab-bar-item>
  <tab-bar-item path="cart" activeColor="black">
    <img slot="item-icon" src="~assets/img/tabbar/baoshuicang.svg" alt="">
    <img slot="item-icon-action" src="~assets/img/tabbar/baoshuicang_hover.svg" alt="">
    <div slot="item-text">购物车</div>
  </tab-bar-item>
  <tab-bar-item path="profile" activeColor="green">
    <img slot="item-icon" src="~assets/img/tabbar/wo.svg" alt="">
    <img slot="item-icon-action" src="~assets/img/tabbar/wo_hover.svg" alt="">
    <div slot="item-text">我的</div>
  </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar.vue"
  import TabBarItem from "components/common/tabbar/TabBarItem.vue"
export default{
  name: "manTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
</style>
