<template>
    <div v-if="Object.keys(goods).length !==0" id="detail-base-info" >
      <div class="info-title">{{goods.title}}</div>
      <div class="info-price">
        <span class="info-price-now">{{goods.price}}</span>
        <del>
          <span class="info-price-old">{{goods.oldPrice}}</span>
        </del>
        <span class="info-price-discount" :style="{backgroundColor: goods.discountBgColor}"> {{goods.discount }}</span>
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
        <img :src="goods.sercices[1].icon" alt="">
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
  #detail-base-info{
  padding: 10px;
  }
  .info-title {
    font-size: 18px;
    color: #000000;
    padding-bottom: 7px;
}
  .info-price-now {
    font-size: 18px;
    color: #ff5777;
  }
  .info-price-old {
    font-size: 5px;
    color: gray;
    padding: 5px;
  }
  .info-price-discount {
    color: white;
    border-radius:0.21rem;
    padding: 0.128rem;
    font-size: 0.6rem;
    position: relative;
    top: -0.21rem;
    text-align: center;
  }
  .info-other {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(128, 128, 128, 0.3);
    font-size: 5px;
    color: gray;
    padding-top: 10px;
    padding-bottom: 5px;
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    font-size: 6px;
    color: black;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 3px solid rgba(128, 128, 128, 0.3);

  }
  .info-service img {
    width: 10px;
  }
</style>
