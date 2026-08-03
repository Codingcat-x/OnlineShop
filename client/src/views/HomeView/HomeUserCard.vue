<template>
  <div class="card">
    <div class="login-state-box text-center">
      <div class="user-avator-box">
        <i class="user-avator bi bi-person-circle"></i>
        <div class="user-name">{{ isLogin ? uname : '未登录' }}</div>
      </div>
      <div v-if="!isLogin" class="login-btn-box my-auto">
        <button type="button" class="btn btn-danger" @click="goLogin">登陆</button>
      </div>
    </div>
    <div class="user-btn-box text-center">
      <div class="row row-cols-2 g-2">
        <div class="col">
          <button type="button" class="btn">
            <i class="bi bi-cart-fill"></i>购物车
          </button>
        </div>
        <div class="col">
          <button type="button" class="btn">
            <i class="bi bi-heart-fill"></i>我收藏的
          </button>
        </div>
        <div class="col">
          <button type="button" class="btn">
            <i class="bi bi-clipboard-check-fill"></i>我的订单
          </button>
        </div>
        <div class="col">
          <button type="button" class="btn">
            <i class="bi bi-shield-fill-check"></i>退款售后
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFunctionCard',
  data() {
    return {
      isLogin: false
    }
  },
  methods: {
    goLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.card {
  height: 400px;
  padding: 12px;
  display: flex;
  gap: 8px
}
.user-btn-box {
  .btn {
    width: 100%;
    font-size: 14px;
    background-color: var(--bs-secondary-bg);
    .bi {
      display: block;
      font-size: 25px;
      color: var(--bs-danger-color);
    }
  }
}
.login-state-box {
  background-color: var(--bs-secondary-bg);
  border-radius: 6px;
  height: 214px;
  .user-avator-box {
    .user-avator {
      font-size: 64px;
      color: var(--bs-secondary-color);
    }
  }
  .login-btn-box {
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>