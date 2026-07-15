<template>
  <div class="card">
    <!-- <div class="card-header"><b>分类浏览</b></div> -->
    <!-- <ul class="list-group">
      <li class="list-group-item">电脑 / 配件 / 办公 / 文具</li>
      <li class="list-group-item">家电 / 手机 / 通信 / 数码</li>
      <li class="list-group-item">工业品 / 商业 / 农业 / 定制</li>
      <li class="list-group-item">家具 / 家装 / 家居 / 厨具</li>
      <li class="list-group-item">女装 / 男装 / 内衣 / 配饰</li>
      <li class="list-group-item">女鞋 / 男鞋 / 运动 / 户外</li>
      <li class="list-group-item">汽车 / 珠宝 / 文玩 / 箱包</li>
      <li class="list-group-item">食品 / 鲜花 / 酒水 / 健康</li>
      <li class="list-group-item">母婴 / 童装 / 玩具 / 宠物</li>
      <li class="list-group-item">美妆 / 个护 / 娱乐 / 图书</li>
    </ul> -->
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center">
          <i class="bi-pc-display me-2"></i>数码家电
        </span>
        <i class="bi-chevron-right arrow-icon"></i>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center">
          <i class="bi-house me-2"></i>居家生活
        </span>
        <i class="bi-chevron-right arrow-icon"></i>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center">
          <i class="bi-bag me-2"></i>服饰鞋包
        </span>
        <i class="bi-chevron-right arrow-icon"></i>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center">
          <i class="bi-activity me-2"></i>运动户外
        </span>
        <i class="bi-chevron-right arrow-icon"></i>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center">
          <i class="bi-basket me-2"></i>食品生鲜
        </span>
        <i class="bi-chevron-right arrow-icon"></i>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center">
          <i class="bi-heart me-2"></i>母婴宠物
        </span>
        <i class="bi-chevron-right arrow-icon"></i>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center">
          <i class="bi-droplet me-2"></i>美妆个护
        </span>
        <i class="bi-chevron-right arrow-icon"></i>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center">
          <i class="bi-car-front me-2"></i>汽车工业
        </span>
        <i class="bi-chevron-right arrow-icon"></i>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center">
          <i class="bi-gem me-2"></i>文玩娱乐
        </span>
        <i class="bi-chevron-right arrow-icon"></i>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="d-flex align-items-center">
          <i class="bi bi-flower2 me-2"></i>农副产品
        </span>
        <i class="bi-chevron-right arrow-icon"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeTypeList'
}
</script>

<style scoped>
.card {
  height: 400px;
  overflow-y: hidden;
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
.list-group-item, .card-header {
  font-size: 14px;
  cursor: pointer;
  border: none;
}
.list-group-item i {
  font-size: 16px;
}
</style>