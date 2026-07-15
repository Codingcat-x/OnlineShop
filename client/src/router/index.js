import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/HomeView';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import SearchView from '@/views/SearchView.vue';

// 使用插件
Vue.use(VueRouter);

// 配置路由
export default new VueRouter({
  routes: [
    { 
      path: '/home', component: HomeView, 
      meta: {show: true}
    }, { 
      path: '/login', component: LoginView,
      meta: {show: false}
    }, {  
      path: '/register', component: RegisterView,
      meta: {show: false}
    }, { 
      path: '/search', component: SearchView,
      meta: {show: true}
    }, { 
      path: '/', redirect: '/home',
      meta: {show: true}
    }, { 
      path: '*', redirect: '/404',
      meta: {show: false}
    },
  ]
})