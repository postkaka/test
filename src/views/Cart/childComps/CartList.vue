<template>
    <div class="cart-list">
     <car-list-item v-for="(item,index) in cartList" :key="index" :product="item"></car-list-item>
    </div>
</template>

<script>
  import { mapGetters } from "vuex"
  import CarListItem from "./CarListItem";
    export default {
        name: "CartList",
      components:{
        CarListItem
      },
      computed: {
        ...mapGetters([
          "cartList",
          "cartLength"
        ])
      },
    }
</script>

<style scoped>

</style>
