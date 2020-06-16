import {request} from "./request";
export function getDetail(iid) {
return request({
  url:"/detail",
  params: {
    iid
  }
})
}
//将详情组件中的需要的数据进行整合
export class Goods {
  constructor(itemInfo, columns ,services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.sercices = services
    this.realPrice = itemInfo.lowNowPrice
  }
}
export class Shop {
  constructor(shopInfo) {
    this.logo =shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}
