<template>
    <div class="check-button" >
      <img src="~assets/img/cart/duihaobeifen.svg" alt="" v-show="!isChecked">
      <img src="~assets/img/cart/duihaobeifen_1.svg" alt="" v-show="isChecked">
    </div>
</template>

<script>
    export default {
        name: "CheckButton",
      props: {
          isChecked: {
            type: Boolean,
            default: false
          }
      }
    }
</script>

<style scoped>
.check-button img{
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
}
  /*.check  {*/
  /*  border-color: red;*/
  /*  background-color: red;*/

  /*}*/
</style>
