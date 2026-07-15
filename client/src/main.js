import Vue from 'vue'
import App from './App.vue'
// Bootstrap5
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

// 三级联动组件、全局组件
// import HomeTypeNav from '@/views/HomeView/HomeTypeNav'
// Vue.component(HomeTypeNav.name, HomeTypeNav);

Vue.config.productionTip = false

// Import Router
import router from '@/router'

new Vue({
  render: h => h(App),
  // Register Router
  router
}).$mount('#app')
