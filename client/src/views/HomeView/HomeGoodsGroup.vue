<template>
  <div>
    <ul class="nav nav-pills mb-3">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">为你推荐</a>
      </li>
      <li class="nav-item" v-for="item in goodsList.category">
        <a class="nav-link" href="#">{{ item.name }}</a>
      </li>
    </ul>
    <div class="row row-cols-lg-5 row-cols-md-4 row-cols-sm-2 g-3">
      <div class="col"
        v-for="item in goodsList.goods" :key="item.id">
        <a href="#" class="card">
          <img :src="item.imgUrl" class="card-img-top" alt="...">
          <div class="card-body">
            <div class="card-title">
              <span class="tag" v-if="item.tags"
               v-for="tag in item.tags" :class="tag.color">{{ tag.name }}</span>
              {{ item.name }}</div>
            <div class="card-price">￥{{ item.price }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeGoodsGroup',
  computed: {
    ...mapState('home', ['goodsList'])
  },
}

</script>

<style scoped lang="less">
.nav-pills {
  .nav-item {
    .nav-link {
      color: var(--bs-body-color);
    }
    .nav-link.active {
      background-color: var(--bs-danger);
      color: #fff;
    }
  }
}
.card {
  text-decoration: none;
  & img {
    width: 100%;
  }
  .card-title {
    height: 3rem;
    overflow: hidden;
    margin: 0;
  }
  .card-price {
    color: var(--bs-danger);
    font-size: 1.2rem;
    font-weight: bold;
  }
  .tag {
    font-size: 0.9rem;
    background-color: var(--bs-primary);
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    margin-right: 0.3rem;
  }
  .tag.red {
    background-color: var(--bs-danger);
  }
  .tag.green {
    background-color: rgb(0, 30, 128);
  }
}
</style>