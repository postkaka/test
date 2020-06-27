<template>
<div class="detail">
  <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
  <scroll class="content" ref="scroll" @scroll="contentScroll"
          :probe-type="3"
  >
    <div>
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop" ></detail-shop-info>
      <detail-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-info>
      <detail-param-info :paramInfo="paramInfo" ref="params"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </div>
  </scroll>
      <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
</div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "../../network/detail";
  import DetailSwiper from "./childComps/DetailSwiper";
  import detailBaseInfo from "./childComps/detailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import scroll from "../../components/common/scroll/scroll";
  import DetailInfo from "./childComps/DetailInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import GoodsList from "../../components/content/goods/GoodsList";
  import {itemListenerMixin,backTopMixin} from "../../common/mixin";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  export default {
        name: "detail",
      components: {
          DetailNavBar,
          DetailSwiper,
          detailBaseInfo,
          DetailShopInfo,
          scroll,
          DetailInfo,
          DetailParamInfo,
          DetailCommentInfo,
          GoodsList,
          DetailBottomBar,
      },
      mixins: [itemListenerMixin,backTopMixin],
      data() {
          return{
           iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            commentInfo:{},
            recommends: [],
            themeTopYs: [],
            getThemeTopY:null,
            currentIndex: 0,
          }
      },
      created() {
          //1.保存传入的iid
          this.iid = this.$route.params.iid,
            //根据iid请求详情数据
            getDetail(this.iid).then(res => {
              //console.log(res);
              const data = res.result
              //2.获取录播图数据
              this.topImages = data.itemInfo.topImages
              // 获取商品信息
              this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
              //console.log(this.goods);
              //创建店铺信息
              this.shop = new Shop(data.shopInfo)
              //console.log(this.shop);
              // 保存商品的详情数据
              this.detailInfo = data.detailInfo
              //console.log(this.detailInfo);
              // 获取参数数据
              this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
              //console.log(this.paramInfo);
              //取出评论信息
              if(data.rate.cRate !== 0){
                this.commentInfo = data.rate.list[0]
              }
            }),
            //请求推荐数据
            getRecommend().then(res =>{
              //console.log(res);
              this.recommends = res.data.list
              //console.log(this.recommends);
            })
      },
      methods: {
           imageLoad() {
            this.$refs.scroll.refresh()
             this.themeTopYs = []
             this.themeTopYs.push(0);
             this.themeTopYs.push(this.$refs.params.$el.offsetTop);
             this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
             this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
             this.themeTopYs.push(Number.MAX_VALUE);
             //console.log(this.themeTopYs);
          },
          titleClick(index) {
            //console.log(index);
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
          },
        contentScroll(position){
             //1.获取y值
          const positionY = -position.y
          //2.positionY和主题中值进行对比
          let length =this.themeTopYs.length
          for(let i = 0;i< length-1; i++){
            //普通写法
            // if(this.currentIndex !== i && ((i < length-1 && positionY >=this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (
            //   i === length -1 &&  positionY > this.themeTopYs[i]
            // ))){
            //   this.currentIndex = i;
            //   this.$refs.nav.currentIndex = this.currentIndex
            // }
            // 特殊写法(在函数内部多传入一个最大值)
             if(this.currentIndex !== i && positionY >=this.themeTopYs[i] && positionY < this.themeTopYs[i+1]){
             this.currentIndex = i;
             this.$refs.nav.currentIndex = this.currentIndex
            }

          }
          this.isShowBackTop = (-position.y) > 1000
        },
        addToCart() {
          //1.获取购物车需要展示信息
          const product = {}
          product.image = this.topImages[0];
          product.title = this.goods.title;
          product.desc = this.goods.desc;
          product.price = this.goods.realPrice;
          product.iid = this.iid;
          //2.将商品添加到购物车里面
          this.$store.dispatch("addCart",product)
        }
      },
      mounted() {
          //拿到对应组件的offsetTop值
    },
    updated() {

    },
    destroyed() {
      this.$bus.$off("itemImgLoad",this.itemImgListener)
    }
  }
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 1;
  background-color: #fff;
  height: 100vh;

}
  .content {
    position: absolute;
    top: 44px;
    bottom: 60px;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>
