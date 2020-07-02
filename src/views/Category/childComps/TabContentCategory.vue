<template>
    <div class="tab-content-category">
      <scroll class="wrapper">
       <div>
         <div v-for="(item,index) in tabData"
              :key="index"
              class="tab-item"
              :class="{active: index===currentIndex}"
              @click="tabClick(index)"
         >{{item.title}}</div>
       </div>
      </scroll>
    </div>
</template>

<script>
    import scroll from "../../../components/common/scroll/scroll";
    export default {
        name: "TabContentCategory",
      components: {
          scroll
      },
      props:{
        tabData:{
          type: Array,
          default(){
            return []
          }
        }
      },
      data() {
          return {
            currentIndex : 0
          }
      },
      methods: {
        tabClick(index) {
          this.currentIndex = index
        }
      }
    }
</script>

<style scoped>
  .tab-content-category {
    background-color: #fff;
    box-sizing: border-box;
    height:100%;
    width: 100px;
  }
  .tab-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
  }
  .wrapper {
    height: 100%;
  }
    .active {
    font-weight: 700;
    color: #ff6699;
    background-color: #eeeeee;
    border-left: 3px solid #eb4868;
  }
</style>
