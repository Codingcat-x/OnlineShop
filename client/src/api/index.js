import requests from "./request";

// 三级联动接口

// 获取分类列表到 HomeCategoryList 中
export const reqCategoryList = () => {
  return requests.get("/category/list").then((res) => {
    return res;
  });
}
// 获取Banner轮播图数据
export const reqBannerList = () => {
  return requests.get('/banner').then(res => {
    return res;
  })
}

export const reqActivityList = () => {
  return requests.get('/activity').then(res => res);
}

export const reqGoodsList = () => {
  return requests.get('/goods').then(res => res);
}