<template>
  <div class="component">
    <nav class="navbar navbar-expand-lg bg-danger">
      <div class="container">
        <a class="navbar-brand text-white" href="#">Online Shop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav default-nav me-auto ">
            <li class="nav-item">
              <a @click="goHome" class="nav-link text-white active">首页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">商品分类</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">会员服务</a>
            </li>

          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                与我有关
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">我的订单</a></li>
                <li><a class="dropdown-item" href="#">我的购物车</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">我的主页</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                商业行为
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">企业采购</a></li>
                <li><a class="dropdown-item" href="#">合作招商</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">商家入驻</a></li>
                <li><a class="dropdown-item" href="#">商家后台</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                联系我们
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">服务电话</a></li>
                <li><a class="dropdown-item" href="#">服务邮箱</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">在线客服</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <div class="search-box container text-center my-3">
      <div class="row align-items-center">
        <div class="col-3">
          <a class="web-title d-felx" href="/">
            <img src="../assets/webLogo.png" class="web-logo">
            <h5 class="title-box">
              <div class="title">Online Shop</div>
              <div class="url">www.onlineshop.com</div>
            </h5>
          </a>
        </div>
        <div class="col-6">
          <div class="input-group mb-3">
            <button class="switch-searchType-btn btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{ searchType ? '找商品' : '找店铺' }}</button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" @click="searchType=true">找商品</a></li>
              <li><a class="dropdown-item" @click="searchType=false">找店铺</a></li>
            </ul>
            <input type="text" class="input-view form-control" aria-label="Text input with dropdown button"
              @keyup.enter="goSearch" v-model="keyword">
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      keyword: '',
      searchType: true
    }
  },
  methods: {
    goHome() {
      if (this.$route.path !== '/home' && this.$route.path !== '/')
        this.$router.push('/')
    },
    goRegister() {
      if (this.$route.path !== '/register')
        this.$router.push('/register')
    },
    goLogin() {
      if (this.$route.path !== '/login')
        this.$router.push('/login')
    },
    goSearch() {
      this.$router.push({
        path: '/search',
        query: { keyword: this.keyword }
      }).catch(err => {})
    }
  }
}
</script>

<style scoped lang="less">
.web-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  .web-logo {
    width: 68px;
    vertical-align: baseline;
  }
  .title-box {
    font-weight: bold;
    color: var(--bs-danger);
    .title {
      font-size: 28px;
    }
    .url {
      font-size: 14px;
      color: var(--bs-gray);
    }
  }
}
.navbar-brand {
  font-weight: bold;
}
.navbar-nav {
  & a {
    color: white;
  }
  .nav-link {
    font-weight: bold;
    cursor: pointer;
  }
  .dropdown-menu {
    .dropdown-item {
      font-weight: bold;
      color: black;
    }
  }
}

.search-box {
  .input-view {
    border: var(--bs-danger) 2px solid;
    border-left: none;
  }
  .switch-searchType-btn {
    border: var(--bs-danger) 2px solid;
    border-right: none;
    color: var(--bs-danger);
    font-weight: bold;
    &:hover {
      background-color: var(--bs-danger);
      color: white;
    }
    &:focus {
      background-color: var(--bs-danger);
      color: white;
    }
  }
}

</style>