<template>
<div class="detail">
  <detail-nav-bar></detail-nav-bar>
  <detail-swiper :topImages="topImages"></detail-swiper>
  <detail-base-info :goods="goods"></detail-base-info>
</div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import {getDetail,Goods} from "../../network/detail";
  import DetailSwiper from "./childComps/DetailSwiper";
  import detailBaseInfo from "./childComps/detailBaseInfo";


  export default {
        name: "detail",
      components: {
          DetailNavBar,
          DetailSwiper,
          detailBaseInfo
      },
      data() {
          return{
           iid: null,
            topImages: [],
            goods: {},
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
            })
      }
    }
</script>

<style scoped>

</style>
