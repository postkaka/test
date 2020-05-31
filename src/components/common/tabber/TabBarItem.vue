<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if='!isActive' name="item-icon"></slot>
    <slot v-else name="item-icon-action"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    data() {
      return{
        //isActive: true
      }
    },
    props:{
      path:  String,
      activeColor:{
        type: String,
        default: "red"
      }
    },
    computed:{
      isActive() {
        return this.$route.path.indexOf(this.path) !==-1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} :{}
      }
    },
    methods:{
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }

</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
