<template>
  <div>
    <h1>SearchView: {{ keyword }}</h1>
  </div>
</template>

<script>
export default {
  name: 'SearchView',
  computed: {
    keyword() {
      return this.$route.query.keyword || ''
    }
  },
  watch: {
    // 路由 query 变化时（如点击首页分类再次搜索），在此发起搜索请求
    '$route.query.keyword'(keyword) {
      this.getSearchResult(keyword || '')
    }
  },
  methods: {
    getSearchResult(keyword) {
      // 在这里发搜索请求
    }
  }
}
</script>

<style scoped>
</style>
