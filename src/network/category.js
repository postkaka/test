import {request} from "./request";

export function getCategory() {
  return request({
    url:'/category'
  })
}

export function getSubcategory(mailkey) {
  return request({
    url:'/subcategory',
    params: {
    mailkey
    }
  })
}
