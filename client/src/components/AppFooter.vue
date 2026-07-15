<template>
  <div class="app-footer">
    <div class="link-list-box container">
      <div class="row g-3 mt-3"> 
        <div class="col">
          <div class="card">
            <div class="card-header">
              购物指南
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">购物流程</li>
              <li class="list-group-item">会员介绍</li>
              <li class="list-group-item">本地生活 / 团购</li>
              <li class="list-group-item">常见问题</li>
              <li class="list-group-item">购物指南</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">
              配送服务
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">快递到家</li>
              <li class="list-group-item">上门自提</li>
              <li class="list-group-item">配送服务详情</li>
              <li class="list-group-item">配送费用标准</li>
              <li class="list-group-item">海外配送</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">
              支付方式
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">货到付款</li>
              <li class="list-group-item">在线支付</li>
              <li class="list-group-item">分期付款</li>
              <li class="list-group-item">邮局汇款</li>
              <li class="list-group-item">公司转账</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">
              售后服务
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">售后政策</li>
              <li class="list-group-item">价格保护</li>
              <li class="list-group-item">退款说明</li>
              <li class="list-group-item">维修 / 退换</li>
              <li class="list-group-item">取消订单</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">
              特色服务
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">数码产品参数查询</li>
              <li class="list-group-item">DIY装机</li>
              <li class="list-group-item">延保服务</li>
              <li class="list-group-item">流量卡</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <hr/>
      <p class="text-center">
        <a href="#">友情链接</a>
      </p>
      <p class="text-center">
        <a href="#">地址：Address</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped lang="less">
.link-list-box {
  .card {
    font-size: 14px;
    .card-header {
      font-weight: 700;
    }
    .list-group-item {
      background-color: var(--bg-dark);
      color: var(--text-light);
      font-weight: 400;
    }
  }
}
</style>