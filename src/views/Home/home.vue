<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <scroll class="content" ref="scroll"
          :probe-type="3"
          @scroll="contentScroll"
          :pull-up-load="true"
          @pullingUp="loadMore">
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"
                 @itemClick="itemClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </scroll>
<!--  加v-show就是为了对下面的滚动位置进行判断如果大于1000v-show的值为true，反之为flase-->
  <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
</div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";


  import TabControl from "../../components/content/tabControl/TabControl"
  import GoodsList from "../../components/content/goods/GoodsList";
  import BackTop from "../../components/content/backTop/BackTop";
  import NavBar from "../../components/common/navbar/NavBar";
  import scroll from "../../components/common/scroll/scroll";

  import {getHomeMultidata} from "../../network/home";
  import {getHomeGoods} from "../../network/home";

  export default {
        name: "home",
      components: {

       HomeSwiper,
        RecommendView,
        FeatureView,

        TabControl,
        GoodsList,
        BackTop,
        //GoodsListItem,
        NavBar,
        scroll,
      },
    data(){
        return {
          banners:[],
          recommends: [],
          goods: {
            "pop": {page: 0,list: []},
            "new": {page: 0,list: []},
            "sell": {page: 0,list: []},
          },
          //设置默认类型pop
          currentType: "pop" ,
          isShowBackTop: false
        }
    },
    //不要过长的代码展示在标签中
    computed: {
          showGoods() {
            return this.goods[this.currentType].list
          }
    },
  created(){
    //1.请求多个数据
   this.getHomeMultidata()
    //2.请求商品数据
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
    methods: {
          //事件监听相关的方法
      itemClick(index) {
        //设置一个switch语法进行条件判断
        switch (index) {
          case 0:
            this.currentType = "pop"
                break
            case 1:
              this.currentType = "new"
                break
            case 2:
              this.currentType = "sell"
                break
        }
      },
      backClick() {
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        //取到BackTop的show值与位置的y值进行比较（y值原来是负值需要取到他的绝对值）
      this.isShowBackTop = (-position.y) > 1000
      },
      //通过调用封装的网络请求实现页面的数据加载
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
          //网络请求相关的方法
          getHomeMultidata() {
            getHomeMultidata().then(res =>{
              //console.log(res);
              this.banners = res.data.banner.list;
              this.recommends = res.data.recommend.list;
            })
          },
      getHomeGoods(type) {
            const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res =>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          //标识一下上拉加载已经结束
          this.$refs.scroll.finishPullUp()
        })
      }
    }
    };

</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    height: 100vh;
    background: white;
    position: relative;
  }
.home-nav{
  background-color: var(--color-tint);
  color: #ffffff;
 position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
  .tab-control {
    position: sticky;
    top:44px;
    z-index: 4;
  }
  /*.content {*/
  /*  height: calc(100% - 93px);*/
  /*  margin-top: 44px;*/
  /*  overflow: hidden;*/
  /*}*/
  .content {
    /*height: 300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
