<template>
  <div>
    <HomeClassifyNav class="mb-3"/>
    <div class="row g-3 carousel-container">
      <div class="col-2">
        <HomeTypeList/>
      </div>
      <div class="col-8">
        <HomeCarousel/>
      </div>
      <div class="col-2">
        <HomeFunctionCard/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeClassifyNav from './HomeClassifyNav.vue'
import HomeTypeList from './HomeTypeList.vue'
import HomeCarousel from './HomeCarousel.vue'
import HomeFunctionCard from './HomeFunctionCard.vue'

export default {
  name: 'HomeView',
  components: {
    HomeClassifyNav, HomeTypeList, HomeCarousel, HomeFunctionCard
  },
}
</script>

<style scoped>
.carousel-container {
  height: 400px;
}
</style>