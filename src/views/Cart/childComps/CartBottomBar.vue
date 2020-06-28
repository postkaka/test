<template>
    <div class="cart-bottom-bar">
     <div class="check">
       <check-button :is-checked="isSelectAll" @click.native="checkClick"></check-button>
       <span>全选</span>
     </div>
      <div class="total-price">
        合计：￥{{totalPrice}}
      </div>
      <div class="calculate" @click="calcClick">
        去计算({{checkLength}})
      </div>
    </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/CheckButton";
    export default {
        name: "CartBottomBar",
      components: {
          CheckButton
      },
      computed: {
          totalPrice(){
            return this.$store.getters.cartList.filter(item => {
              return item.checked
            }).reduce((prevalue,item) => {
              return prevalue + item.price * item.count
            },0).toFixed(2)
          },
        checkLength(){
            return this.$store.state.cartList.filter(item => item.checked).length
        },
        isSelectAll() {
           //return !(this.$store.getters.cartList.filter(item => !item.checked).length)
          if(this.$store.getters.cartList.length === 0) return false
         return !(this.$store.getters.cartList.find(item => !item.checked))
        }
      },
      methods: {
          checkClick() {
            if(this.isSelectAll){//全部选中
              this.$store.getters.cartList.forEach(item => item.checked = false)
            }else{//全部不选中或者部分选中
              this.$store.getters.cartList.forEach(item => item.checked = true)
            }
          },
          calcClick() {
            if(!this.isSelectAll){

            }
          }
      }

    }
</script>

<style scoped>
  .cart-bottom-bar {
    height: 40px;
    background-color: #eee;
    position: absolute;
    bottom: 40px;
    right: 0;
    left: 0;
    line-height: 40px;
    display: flex;
    font-size: 14px;
  }
  .check {
    display: flex;
    margin-left: 10px;
    width: 60px;
  }
  .check check-bottom {
    line-height: 20px;
    width: 20px;
  }
  .check span {
    line-height: 30px;
    margin-left: 5px;
    width: 40px;
  }
  .total-price {
    line-height: 30px;
    margin-left: 20px;
    flex: 1;
  }
  .calculate {
    line-height: 30px;
    background-color: red;
    width: 90px;
    color: #ffffff;
    text-align: center;

  }
</style>
