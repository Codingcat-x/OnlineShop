import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 引入模块式仓库
import home from './home.js'
import search from './search.js'
import user from './user.js'

export default new Vuex.Store({
  modules: {
    home,
    search,
    user
  }
})