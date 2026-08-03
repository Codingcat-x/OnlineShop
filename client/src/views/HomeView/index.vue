<template>
  <div>
    <div class="carousel-container">
      <div class="row g-3">
        <div class="col-2">
          <HomeCategoryList/>
        </div>
        <div class="col-8">
          <HomeCarousel/>
        </div>
        <div class="col-2">
          <HomeUserCard/>
        </div>
      </div>
    </div>
    &nbsp;
    <div class="home-activity mt-2">
      <HomeActivity/>
    </div>
    <div class="home-goods-group mt-3"> 
      <HomeGoodsGroup/>
    </div>
  </div>
</template>

<script>
import HomeClassifyNav from './HomeClassifyNav'
import HomeCategoryList from './HomeCategoryList'
import HomeCarousel from './HomeCarousel'
import HomeUserCard from './HomeUserCard'
import HomeActivity from './HomeActivity'
import HomeGoodsGroup from './HomeGoodsGroup'

export default {
  name: 'HomeView',
  data() {
    return {
      keyword: '',
      showTypeMenu: false,
      searchType: true,
      count: 0
    }
  },
  components: {
    HomeClassifyNav, HomeCategoryList, HomeCarousel,
    HomeUserCard, HomeActivity, HomeGoodsGroup
  }
}
</script>

<style scoped>
.carousel-container {
  height: 400px;
}

</style>