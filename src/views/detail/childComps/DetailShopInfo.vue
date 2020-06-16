<template>
    <div class="detail-shop-info">
      <div class="shop-top">
        <img :src="shop.logo" alt="" >
        <span>{{shop.name}}</span>
      </div>
      <div class="shop-middle">
        <div class="shop-middle-item shop-middle-left">
          <div class="info-sells">
            <div class="sells-count">
              {{shop.sells }}
            </div>
            <div class="sells-text">总销量</div>
          </div>
          <div class="info-goods">
            <div class="goods-count">
              {{shop.goodsCount}}
            </div>
            <div class="goods-text">全部宝贝</div>
          </div>
        </div>
        <div class="shop=middle-item shop-middle-right">
          <table>
            <tr v-for="(item,index) in shop.score" :key="index">
              <td>{{item.name}}</td>
              <td class="score">{{item.score}}</td>
              <td class="better"><span>{{item.isBetter}}</span></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="shop-bottom">
        <div class="enter-shop">进店逛逛</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailShopInfo",
      props:{
          shop: {
            type: Object,
            default() {
              return {}
            }
          }
      }
    }
</script>

<style scoped>
.shop-top img{
  height: 100px;
  width: 100px;
}
</style>
