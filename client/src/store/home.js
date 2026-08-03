import { reqCategoryList } from '../api'
import { reqBannerList } from '../api'
import { reqActivityList } from '../api'
import { reqGoodsList } from '../api'

export default {
  namespaced: true,
  // 状态
  state: {
    categoryList: [],
    bannerList: [],
    activityList: [],
    goodsList: []
  },
  // The only way to modify the state.
  mutations: {
    SET_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList
    },
    SET_BANNER_LIST(state, bannerList) {
      state.bannerList = bannerList
    },
    SET_ACTIVITY_LIST(state, activityList) {
      state.activityList = activityList
    },
    SET_GOODS_LIST(state, goodsList) {
      state.goodsList = goodsList
    }
  },
  // Write the business logic and handle asynchronous operations.
  actions: {
    async getCategoryList({ commit, state }) {
      if (state.categoryList.length) return
      const { data } = await reqCategoryList()
      commit('SET_CATEGORY_LIST', data)
    },
    async getBannerList({ commit, state }) {
      if (state.bannerList.length) return
      const { data } = await reqBannerList()
      commit('SET_BANNER_LIST', data)
    },
    async getActivityList({ commit, state }) {
      if (state.activityList.length) return
      const { data } = await reqActivityList()
      commit('SET_ACTIVITY_LIST', data)
    },
    async getGoodsList({ commit, state }) {
      if (state.goodsList.length) return
      const result = await reqGoodsList()
      if (result.code == 200) {
        commit('SET_GOODS_LIST', result.data)
      }
    }
  },
  // 类计算属性，简化仓库数据
  getters: {

  }
}