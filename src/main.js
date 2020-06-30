import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import FastClick from "fastclick"
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(ElementUI)
FastClick.attach(document.body)
Vue.use(VueLazyload,{
  loading: require("./assets/img/common/placeholder.png")
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
