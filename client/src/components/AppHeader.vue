<template>
  <div class="component">
    <nav class="navbar navbar-expand-lg bg-danger">
      <div class="container">
        <a class="navbar-brand text-white" href="#">Guigu Mall</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav default-nav me-auto ">
            <li class="nav-item">
              <a @click="goHome" class="nav-link text-white active">首页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">企业版</a>
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
            <!-- 深色模式切换按钮 -->
            <li class="nav-item">
              <button class="nav-link theme-toggle-btn" @click="toggleTheme" :title="isDarkMode ? '切换到浅色模式' : '切换到深色模式'">
                <i :class="isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill'"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div :class="['search-box', 'p-3', { 'search-box-fixed': isSearchBoxFixed }]" ref="searchBox">
      <div class=" container text-center">
        <div class="row align-items-center">
          <div class="col-3">
            <a class="web-title d-felx align-item-center" href="/">
              <img src="@/assets/webLogo.png" class="web-logo">
              <h5 class="title-box">
                <div class="title">Guigu Mall</div>
                <div class="url">www.guigumall.com</div>
              </h5>
            </a>
          </div>
          <div class="col-6 align-items-center">
            <div class="input-group">
              <div class="btn-group">
                <button class="switch-searchType-btn btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ searchType ? '找商品' : '找店铺' }}
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#" @click.prevent="searchType=true">找商品</a></li>
                  <li><a class="dropdown-item" href="#" @click.prevent="searchType=false">找店铺</a></li>
                </ul>
              </div>
              <input type="text" class="input-view form-control" aria-label="Text input with dropdown button"
                @keyup.enter="goSearch" v-model="keyword">
            </div>
            <div class="link-box d-flex gap-4 mt-2">
              <a href="#">服装城</a>
              <a href="#">美妆馆</a>
              <a href="#">全球购</a>
              <a href="#">闪购</a>
              <a href="#">团购</a>
              <a href="#">秒杀</a>
              <a href="#">国补</a>
            </div>
          </div>
          <div class="col-3">
          </div>
        </div>
      </div>
    </div>
    <!-- 占位元素：搜索框固定时保持页面高度，避免内容跳动 -->
    <div v-show="isSearchBoxFixed" class="search-box-placeholder" :style="{ height: searchBoxHeight + 'px' }"></div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

const THEME_STORAGE_KEY = 'online-shop-theme'

export default {
  name: 'AppHeader',
  data() {
    return {
      showTypeMenu: false,
      isDarkMode: false,
      keyword: '',
      searchType: true,
      // 搜索框是否固定到页面顶部
      isSearchBoxFixed: false,
      // 搜索框高度，用于占位防止内容跳动
      searchBoxHeight: 0,
      // 搜索框顶部在文档中的 Y 坐标（固定/取消固定的滚动阈值）
      searchBoxOffsetTop: 0
    }
  },
  created() {
    // 初始化：读取 localStorage 中的主题设置
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    // 优先使用用户保存的偏好，其次跟随系统
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark'
    } else {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    this.applyTheme()
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    this.handleScroll()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      this.applyTheme()
      localStorage.setItem(THEME_STORAGE_KEY, this.isDarkMode ? 'dark' : 'light')
    },
    applyTheme() {
      document.documentElement.setAttribute('data-bs-theme', this.isDarkMode ? 'dark' : 'light')
    },
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
    },
    // 滚动时：当搜索框顶部到达视口顶部（navbar 已被顶出）时将其固定；
    // 当滚动回搜索框原本位置之上时取消固定，让 navbar 重新进入视图
    handleScroll() {
      const el = this.$refs.searchBox
      if (!el) return
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      if (this.isSearchBoxFixed) {
        // 固定状态下：滚动位置回到搜索框原本位置之上时取消固定
        if (scrollTop < this.searchBoxOffsetTop) {
          this.isSearchBoxFixed = false
        }
      } else {
        // 非固定状态下：实时记录搜索框顶部在文档中的位置（兼容 navbar 高度变化）
        const rect = el.getBoundingClientRect()
        this.searchBoxOffsetTop = scrollTop + rect.top
        if (scrollTop >= this.searchBoxOffsetTop) {
          this.searchBoxHeight = el.offsetHeight
          this.isSearchBoxFixed = true
        }
      }
    }
  },
  watch: {
    // 路由跳转携带关键词时（如点击首页分类），同步到搜索框
    '$route.query.keyword'(keyword) {
      if (keyword) this.keyword = keyword
    },
    // 离开搜索页面时清空搜索框
    '$route.path'(path) {
      if (path !== '/search') this.keyword = ''
    }
  },
  computed: {
    ...mapState('home', ['count'])
  }
}
</script>

<style scoped lang="less">

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
  .nav-link.active {
    color: #fff;
  }
  .dropdown {
    .dropdown-toggle {
      color: #fff;
    }
    .dropdown-menu {
      .dropdown-item {
        font-weight: bold;
        color: var(--bs-body-color);
      }
    }
  }
}

.theme-toggle-btn {
  font-size: 1.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff!important;
  padding: 0.5rem 0.75rem;
  line-height: 1;
  &:hover {
    opacity: 0.8;
  }
  i {
    vertical-align: middle;
  }
}
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
.search-box {
  background-color: var(--bs-body-bg);
  transition: box-shadow 0.2s ease;
  .input-view {
    border: var(--bs-danger) 2px solid;
    border-left: none;
  }
  .switch-searchType-btn {
    border: var(--bs-danger) 2px solid;
    border-radius: 6px 0 0 6px;
    border-right: none;
    color: var(--bs-danger);
    background-color: var(--bs-body-bg);
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
// 固定到页面顶部
.search-box-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.link-box {
  & a {
    color: var(--bs-body-color);
    text-decoration: none;
    font-size: 16px;
  }
}
</style>
