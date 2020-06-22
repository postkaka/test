import Vue from "vue"
import Vuex from "vuex"


//1.安装插件
Vue.use(Vuex)

//2.创建store对象
const store = new Vuex.Store({
  state:{
  cartList:[]
  },
  mutations:{
  addCart(state,payload){
    //payload新添加的商品
    let oldProduct = null;
    for(let item of state.cartList){
      if(item.iid === payload.iid){
        oldProduct = item
      }
    }
    if(oldProduct){
      oldProduct.count += 1
    }else {
      payload.count = 1
      state.cartList.push(payload)
    }

  }
  }
})
//3.挂载Vue实例上
export default store
