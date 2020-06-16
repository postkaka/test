<template>
<div class="detail">
  <detail-nav-bar class="detail-nav"></detail-nav-bar>
  <scroll class="content">
    <div>
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
    </div>
  </scroll>
</div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import {getDetail,Goods,Shop} from "../../network/detail";
  import DetailSwiper from "./childComps/DetailSwiper";
  import detailBaseInfo from "./childComps/detailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import scroll from "../../components/common/scroll/scroll";


  export default {
        name: "detail",
      components: {
          DetailNavBar,
          DetailSwiper,
          detailBaseInfo,
          DetailShopInfo,
          scroll
      },
      data() {
          return{
           iid: null,
            topImages: [],
            goods: {},
            shop: {}
          }
      },
      created() {
          //1.保存传入的iid
          this.iid = this.$route.params.iid,
            //根据iid请求详情数据
            getDetail(this.iid).then(res => {
              console.log(res);
              const data = res.result
              //2.获取录播图数据
              this.topImages = data.itemInfo.topImages
              // 获取商品信息
              this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
              console.log(this.goods);
              //创建店铺信息
              this.shop = new Shop(data.shopInfo)
              console.log(this.shop);
            })
      }
    }
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;

}
  .content {
    height: calc(100% - 44px);
  }
  .detail-nav {
    position: relative;
    z-index: 9;
  }
</style>
