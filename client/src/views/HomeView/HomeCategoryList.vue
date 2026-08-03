<template>
  <div class="card list-group-card" @click="handleListClick">
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center"
      v-for="item in categoryList">
        <span class="d-flex align-items-center">
          <i class="me-2" :class="item.icon"></i>{{ item.name }}
        </span>
        <i class="bi-chevron-right arrow-icon"></i>
        <div class="category-child-card shadow-sm">
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="child in item.child">
              <div class="d-flex align-items-center">
                <div class="child">{{ child.name }}</div>
                <div class="grandchild-box">
                  <span class="grandchild" v-for="grandchild in child.child" :data-keyword="grandchild.name">{{ grandchild.name }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeCategoryList',
  data() {
    return {
    }
  },
  computed: {
    ...mapState('home', ['categoryList'])
  },
  methods: {
    goSearch(keyword) {
      this.$router.push({
        path: '/search',
        query: { keyword }
      }).catch(err => {})
    },
    // 事件委托：只在根元素上绑定一次点击监听，
    // 通过 data-keyword 属性判断点击的是否为分类项
    handleListClick(e) {
      const target = e.target.closest('.grandchild')
      if (!target) return
      const keyword = target.dataset.keyword
      if (keyword) this.goSearch(keyword)
    }
  }
}
</script>

<style scoped lang="less">
.card {
  height: 400px;
}

/* Webkit 滚动条 (Chrome, Edge, Safari) */
.list-group::-webkit-scrollbar {
  width: 4px;
}

.list-group::-webkit-scrollbar-track {
  background: transparent;
}

.list-group::-webkit-scrollbar-thumb {
  background-color: #c0c0c0;
  border-radius: 2px;
}
.list-group-card {
  position: relative;
}
.list-group {
  .list-group-item {
    background-color: transparent;
  }
  .list-group-item:hover {
    background-color: var(--bs-secondary-bg);
  }
  .list-group-item, .card-header {
    font-size: 14px;
    cursor: pointer;
    border: none;
  }
  .list-group-item i {
    font-size: 16px;
  }
  .list-group-item:hover .category-child-card {
    display: block;
  }
}

.category-child-card {
  width: 480px;
  display: none;
  position: absolute;
  right: -480px;
  top: -50%;
  z-index: 999;
  background-color: var(--bs-body-bg);
  border-radius: 6px;
  .child {
    width: 72px;
    font-weight: bold;
  }
  .grandchild {
    display: inline-block;
    margin: 5px;
    padding: 2px 5px;
    cursor: pointer;
  }
  .grandchild:hover {
    color: var(--bs-danger);
    background-color: var(--bs-body-bg);
    font-weight: bold;
  }
}
</style>