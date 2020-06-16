<template>
    <div v-if="Object.keys(goods).length !==0" class="detail-base-info" >
      <div class="info-title">{{goods.title}}</div>
      <div class="info-price">
        <span>{{goods.price}}</span>
        <span>{{goods.oldPrice}}</span>
        <span> {{ goods.discount }}</span>
      </div>
      <div class="info-other">
       <span>{{ goods.columns[0] }}</span>
        <span>{{goods.columns[1]}}</span>
        <span >
          {{ goods.sercices[goods.sercices.length - 1].name }}
        </span>
      </div>
      <div class="info-service">
      <span
      v-for="(item,index) in goods.sercices.length -1"
      :key="index"
      >
        <img src="goods.sercices[item - 1].icon" alt="">
        <span>{{goods.sercices[item - 1].name}}</span>
      </span>
      </div>
    </div>
</template>
<script>
    export default {
        name: "detailBaseInfo",
      props: {
          goods: {
            type: Object,
            default() {
              return {};
            }
          }
      }
    }
</script>

<style scoped>
.info-title {

}
</style>
