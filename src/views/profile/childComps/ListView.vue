<template>
    <div class="list-view">
      <div v-for="(item,index) in listContent" :key="index" class="item">
        <span class="icon">
          <img :src="item.img" alt="">
        </span>
        <div class="info">{{item.title}}</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ListView",
      props: {
          listContent:{
            type:Array,
            default: function () {
              return[]
            }

            }
          }
    }
</script>

<style scoped>
  .list-view {
    background-color: #fff;
    font-size: 15px;
    color: #333;
  }
  .list-view .item{
    height: 44px;
    line-height: 44px;
    position: relative;
  }
  .item .icon{
    margin-top: 10px;
    position: absolute;
    left: 16px;
    top: -7px;
  }
  .item .info {
    margin-left: 40px;
    padding-left: 5px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .icon img{
  height: 20px;
  width: 20px;
}
  .item:last-of-type .info{
    border-bottom: none;
  }
</style>
