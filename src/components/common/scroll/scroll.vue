<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>

  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'

  BScroll.use(Pullup)
    export default {
        name: "scroll",
      data() {
          return {
            scroll: null
          }
      },
      mounted() {
          this.scroll = new BScroll(this.$refs.wrapper,{

          })
      }
    }
</script>

<style scoped>

</style>
