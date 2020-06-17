<template>
<div class="detail">
  <detail-nav-bar class="detail-nav"></detail-nav-bar>
  <scroll class="content" ref="scroll">
    <div>
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop" ></detail-shop-info>
      <detail-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
    </div>
  </scroll>
</div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import {getDetail,Goods,Shop,GoodsParam} from "../../network/detail";
  import DetailSwiper from "./childComps/DetailSwiper";
  import detailBaseInfo from "./childComps/detailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import scroll from "../../components/common/scroll/scroll";
  import DetailInfo from "./childComps/DetailInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";


  export default {
        name: "detail",
      components: {
          DetailNavBar,
          DetailSwiper,
          detailBaseInfo,
          DetailShopInfo,
          scroll,
          DetailInfo,
          DetailParamInfo
      },
      data() {
          return{
           iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramInfo: {}
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
              // 保存商品的详情数据
              this.detailInfo = data.detailInfo
              console.log(this.detailInfo);
              // 获取参数数据
              this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
              console.log(this.paramInfo);
            })
      },
      methods: {
          imageLoad() {
            this.$refs.scroll.refresh()
          }
      }
    }
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 1;
  background-color: #fff;
  height: 100vh;

}
  .content {
    position: absolute;
    top: 44px;
    bottom: 60px;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
  }
</style>
