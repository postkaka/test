import {debounce} from "./utils";
import BackTop from "../components/content/backTop/BackTop";

export  const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    let refresh= debounce(this.$refs.scroll.refresh,500)
    this.itemImgListener = this.$bus.$on("itemImageLoad",() =>{
      refresh()
    })
    //console.log("混入成功");

  }
}
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
  }
}
