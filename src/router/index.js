import Vue from "vue"
import VueRouter from "vue-router";

const cart = () => import("views/Cart/cart.vue")
const category = () => import("views/Category/category.vue")
const home = () => import("views/Home/home.vue")
const profile = () => import("views/profile/profile.vue")
const detail = () => import("views/detail/detail.vue")

Vue.use(VueRouter)
const routes = [
  {
    path:'',
    redirect: "/home"
  },
  {
    path:'/cart',
    component: cart
  },
  {
    path: "/category",
    component: category
  },
  {
    path: "/home",
    component: home
  },
  {
    path: "/profile",
    component: profile
  },
  {
    path: "/detail/:iid",
    component: detail
  }
]
const router = new VueRouter({
  routes,
  mode: "history"
})


export default router
