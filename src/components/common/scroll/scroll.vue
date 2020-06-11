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
          },
        pullUpLoad: {
            //有些页面不需要上拉加载，所以需要单独将pullUpLoad的值拿出来，默认值为default
            type: Boolean,
            default: false
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
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad
        })
        //2.监听实时滚动的位置
        this.scroll.on("scroll",(position) =>{
          //设置一个自定义事件将滚动位置发送给父组件
          this.$emit("scroll",position)
        })
        //3.监听上拉加载更多
        this.scroll.on("pullingUp",() =>{
          this.$emit("pullingUp")
        })
      },
      methods: {
          scrollTo(x,y,time=300) {
            this.scroll.scrollTo(x,y,time)
          },
        finishPullUp() {
            this.scroll.finishPullUp()
        }
      }
    }
</script>

<style scoped>

</style>
