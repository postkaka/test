<template>
  <div class="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <tab-content-category :tabData="tabData"></tab-content-category>
  </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import TabContentCategory from "./childComps/TabContentCategory";
    import {getCategory,getSubcategory} from"../../network/category"
    export default {
        name: "category",
      components: {
          NavBar,
        TabContentCategory,
      },
      data() {
      return{
        tabData: [],
        categoryData:{},
      }
      },
      created() {
         this._getCategory()
      },
      methods: {
          _getCategory() {
            getCategory().then(res => {
              this.tabData = res.data.category.list
              // for(let i in  res.data.category.list){
              //   this.tabData.push(res.data.category.list[i])
              // }
              // console.log(this.tabData);
              for (let i = 0; i < this.tabData.length; i++) {
                this.categoryData[i] = {
                  subcategories: {},
                  categoryDetail: {
                    'pop': [],
                    'new': [],
                    'sell': []
                  }
                }
              }
              this._getSubcategory()
            })
          },
          _getSubcategory(index){
            getSubcategory().then(res => {
            this.categoryData[index].subcategories = res.data
            })
          }
      }

    }
</script>

<style scoped>
  .nav-bar {
    background-color: #ff8198;
    color: #eeeeee;
    font-weight: 900;
  }
</style>
