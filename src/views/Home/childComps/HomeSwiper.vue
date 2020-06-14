<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image"  alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from"components/common/swiper"
    export default {
        name: "HomeSwiper",
      props:{
          banners:{
            type: Array,
            default(){
              return []
            }
          }
      },
      data() {
          return {
            isLoad: false
          }
      },
      methods: {
          //限制一下只向父组件发送一次请求
          imageLoad() {
            if(! this.isLoad) {
              this.$emit("swiperImageLoad")
              this.isLoad = true
            }
          }
      },
      components:{
          SwiperItem,
          Swiper
      }
    }
</script>

<style scoped>

</style>
