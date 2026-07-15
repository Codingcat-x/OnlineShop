import requests from "./request";

export const getCategoryList = () => {
  return requests.get("/category/list").then((res) => {
    console.log(res);
  });
}