<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators"
          v-for="(_, index) in bannerList" :key="'dot-' + index"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-label="'Slide ' + (index + 1)"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item"
          v-for="(item, index) in bannerList" :key="index"
          :class="{ active: index === 0 }">
          <img :src="`${item.imgUrl}`" class="d-block w-100" alt="">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template> 

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeCarousel',
  data() {
    return {
    }
  },
  computed: {
    ...mapState('home', ['bannerList'])
  },
  methods: {
  }
}
</script>

<style scoped>
#carouselExampleIndicators {
  height: 400px;
  border-radius: 8px;

  .carousel-inner {
    height: 100%;

    .carousel-item {
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
    }
  }
}
.active-box {
  height: 100px;
  .card {
    height: 100%;
  }
}
</style>