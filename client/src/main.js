import Vue from 'vue'
import App from './App.vue'
// Bootstrap5
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/global.css'
// 引入Mock服务
import '@/mock/mockServe.js'

// 仅在开发环境启用
// if (process.env.NODE_ENV === 'development') {
//   import('./mock/mockServe.js');
// }

Vue.config.productionTip = false

import router from '@/router'
import store from '@/store'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')