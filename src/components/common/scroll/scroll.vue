<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>

 import BScroll from "better-scroll"
    export default {
        name: "scroll",
      props:{
          //如果父组件传入probeType值浏览器就可以记录滚动的位置
          probeType: {
            type: Number,
            default: 0
          }
      },
      data() {
          return {
            scroll: null
          }
      },
      mounted() {
          //1.创建better-sroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
          probeType: this.probeType
        })
        //2.监听实时滚动的位置
        this.scroll.on("scroll",(position) =>{
          //设置一个自定义事件将滚动位置发送给父组件
          this.$emit("scroll",position)
        })
      },
      methods: {
          scrollTo(x,y,time=300) {
            this.scroll.scrollTo(x,y,time)
          }
      }
    }
</script>

<style scoped>

</style>
