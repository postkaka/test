<template>
<div class="profile">
 <nav-bar class="nav-bar"><div slot="center">离岸的店</div></nav-bar>
  <login></login>
  <div class="wallet">
    <div class="account">
      <div class="number">
        <span>0.00</span>元
      </div>
      <div class="account-info">我的余额</div>
    </div>
    <div class="account">
      <div class="number">
        <span>0</span>个
      </div>
      <div class="account-info">我的优惠</div>
    </div>
    <div class="account">
      <div class="number">
        <span>0</span>分
      </div>
      <div class="account-info">我的积分</div>
    </div>
  </div>
  <list-view :list-content="orderList" class="order-list"></list-view>
  <list-view :list-content="serviceList" class="service-list"></list-view>
</div>
</template>

<script>
 import NavBar from "../../components/common/navbar/NavBar";
 import Login from "../../components/common/login/Login";
 import ListView from "./childComps/ListView";
    export default {
        name: "profile",
     components :{
       NavBar,
       Login,
       ListView
     },
      data() {
        return{
          orderList: [
            {img:require("assets/img/profile/wodexiaoxi.svg"),title:"我的消息"},
            {img:require("assets/img/profile/jifenshangcheng.svg"),title:"积分商城"},
            {img:require("assets/img/profile/huiyuanqia.svg"),title:"会员卡"}
          ],
          serviceList: [
            {img:require("assets/img/profile/gouwuche.svg"),title:"我的购物车"},
            {img:require("assets/img/profile/app.svg"),title:"下载购物车APP"}
          ]
        }
      }

    }
</script>

<style scoped>
  .profile {
    background-color: #f2f2f2;
  }
 .nav-bar {
   background-color: #ff8198;
   color: #eeeeee;
   font-weight: 900;
 }
 .wallet {
   display: flex;
 }
 .wallet .account {
   width: 100%;
   background-color: #fff;
   margin-right: 1px;
   text-align: center;
   border-right: 1px solid rgba(100,100,100,.1);
   padding-top: 10px;
   padding-bottom: 10px;
 }
 .wallet .number {
  font-weight: 700;
   color: red;
   padding-bottom: 7px;
   padding-top: 10px;
 }
 .wallet:last-of-type .account{
   border-right: none;
 }
  .order-list,  .service-list{
    margin-top: 12px;
  }
</style>
