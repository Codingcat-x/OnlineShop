<template>
  <div class="activity-box">
    <div class="card body-bg"
      v-for="(item, index) in activityList">
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <div class="activity-group">
          <a class="activiety-item" href="#"
           v-for="child in item.content" :href="child.url">
            <img :src="child.image" alt="#">
            <div class="activity-info">
              <div class="activity-price">
                <strong>￥{{ child.price }}</strong>
                <span class="text-success">
                  {{ child.discount ? child.discount * 10 + " 折" : '' }}
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeActivity',
  data() {
    return {
    }
  },
  computed: {
    ...mapState('home', ['activityList'])
  }
}
</script>

<style scoped lang="less">
.activity-box {
  display: flex;
  gap: 1rem;
  height: 170px;
  .card {
    flex: 1;
    .card-body {
      height: 100%;
    }
    .card-title {
      font-size: 1rem;
      font-weight: bold;
    }
  }
  .activity-group {
    display: flex;
    justify-content: space-around;
    height: calc(100% - 20px);
    .activiety-item {
      display: inline-block;
      text-decoration: none;
      color: var(--bs-danger);
      text-align: center;
      .activity-info {
        text-align: center;
        font-size: 1.1rem;
        .activity-price {
          margin-top: 0.5rem;
          height: 2rem;
          line-height: 1;
        }
        .text-success {
          font-size: 0.9rem;
        }
      }
      & img {
        height: calc(100% - 2rem);
      }
    }
  }

}
</style>
