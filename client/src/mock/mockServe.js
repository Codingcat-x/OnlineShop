// 引入 mockjs
import Mock from 'mockjs'
// 把JSON数据格式引入(JSON数据格式不需要对外暴露也可引入)
import banner from './banner.json'
import floor from './floor.json'
import categoryList from './categoryList.json'
import activity from './activity.json'
import goods from './goods.json'

// mock 数据 第一个参数请求地址 第二个参数请求数据
Mock.mock("/api/banner", { code: 200, data: banner }) // 模拟轮播图数据
Mock.mock("/api/floor", { code: 200, data: floor })
Mock.mock("/api/category/list", { code: 200, data: categoryList})
Mock.mock("/api/activity", { code: 200, data: activity})
Mock.mock("/api/goods", { code: 200, data: goods})

// 不需要对外暴露,但是要在入口文件引入,执行一次