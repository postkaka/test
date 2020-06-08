<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
  <feature-view></feature-view>
  <tab-control class="tab-control" :titles="['流行','新款','精选']"
  @itemClick="itemClick"></tab-control>
  <goods-list :goods="showGoods"></goods-list>

</div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";


  import TabControl from "../../components/content/tabControl/TabControl"
  import GoodsList from "../../components/content/goods/GoodsList";
  //import GoodsListItem from "../../components/content/goods/GoodsListItem";
  import NavBar from "../../components/common/navbar/NavBar";

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
        //GoodsListItem,
        NavBar,
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
          currentType: "pop"
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
        })
      }
    }
    };

</script>

<style scoped>
  #home{
    padding-top: 44px;
    background: white;
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
</style>
