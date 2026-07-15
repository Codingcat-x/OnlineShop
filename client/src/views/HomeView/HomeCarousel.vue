<template>
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://ts1.tc.mm.bing.net/th/id/R-C.02e2d81a8b43746a0d35f8eb1658cb7e?rik=dYLSbgdsEvHM1Q&riu=http%3a%2f%2fi1.sinaimg.cn%2fIT%2ful%2f2008%2f1015%2fU1696P2DT20081015041050.jpg&ehk=iOAHPa2VYdZb2rS54VvtpfFyEdNxxATmcPF%2bEYLpSJg%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://ts3.tc.mm.bing.net/th/id/OIP-C.78gp6q9rxBEjeHvkQ5td1AHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://ts3.tc.mm.bing.net/th/id/OIP-C.78gp6q9rxBEjeHvkQ5td1AHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" class="d-block w-100" alt="...">
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
</template> 

<script>
export default {
  name: 'HomeCarousel'
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
</style>