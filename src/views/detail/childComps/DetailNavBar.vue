<template>
    <div class="detail-nav-bar">
      <nav-bar>
        <div slot="left" class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="title">
          <div v-for="(item,index) in titles"
               :key="index"
               class="title-item"
               :class="{cative: index === currentIndex}"
               @click="titlesClick(index)"
          >{{item}}</div>
        </div>
      </nav-bar>
    </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
    export default {
        name: "detailNavBar",
      components: {
          NavBar
      },
      data() {
          return{
            titles: ["商品","参数","评论","推荐"],
            currentIndex: 0
          }
      },
      methods: {
        titlesClick(index) {
        this.currentIndex = index;
        this.$emit("titleClick",index)
        },
        backClick() {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>
  .title {
    display: flex;
  }
  .title-item {
    flex: 1;
  }
  .cative {
    color: var(--color-hight-text);
  }
  .back img {
    margin-top: 13px;
  }
</style>
