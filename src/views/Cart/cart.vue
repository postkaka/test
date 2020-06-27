<template>
    <div class="cart">
      <!--导航-->
      <nav-bar class="nav-bar">
        <div slot="center">购物车({{cartLength}})</div>
      </nav-bar>
      <!--商品的列表-->
      <scroll class="content" ref="scroll">
        <div>
          <cart-list></cart-list>
        </div>
      </scroll>

      <!--底部的汇总-->
      <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";
  import { mapGetters } from "vuex";
  import scroll from "../../components/common/scroll/scroll";
  import CartBottomBar from "./childComps/CartBottomBar";
    export default {
        name: "cart",
      components:{
          NavBar,
          CartList,
          scroll,
          CartBottomBar
      },
      computed: {
          ...mapGetters([
            "cartLength"
          ])
      },
      activated() {
        this.$refs.scroll.refresh()
      },
    }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #ffffff;
    font-weight: 700;
  }
  .content {
   /*height: calc(100% - 44px - 49px);*/
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
  }
</style>
