<template>
<div class="detail">
<detail-nav-bar></detail-nav-bar>
  <detail-swiper :top-images="topImages"></detail-swiper>
</div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import {getDetail} from "network/detail"
  import DetailSwiper from "./childComps/DetailSwiper";
    export default {
        name: "detail",
      components:{
          DetailNavBar,
          DetailSwiper
      },
      data() {
          return{
           iid: null,
            topImages: []
          }
      },
      created() {
          //1.保持传入的iid
          this.iid = this.$route.params.iid
          //2.根据iid请求详情数据
        getDetail(this.iid).then(res => {
          console.log(res);
          //1.获取顶部的图片轮播数据
          this.topImages = res.result.itemInfo.topImages
          console.log(this.topImages);
        })
      }
    }
</script>

<style scoped>

</style>
