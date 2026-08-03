<template>
  <div id="app">
    <AppHeader v-show="$route.path !== '/login'"/>
    <div class="main container mt-3">
      <router-view/>
    </div>
    <AppFooter class="mt-3" v-show="$route.meta.show"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  mounted() {
    // 商品分类数据
    this.$store.dispatch('home/getCategoryList'),
    // 轮播图数据
    this.$store.dispatch('home/getBannerList'),
    // 活动数据
    this.$store.dispatch('home/getActivityList'),
    this.$store.dispatch('home/getGoodsList')
  }
}
</script>

<style>
</style>
