const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 中间件：解析 JSON 请求体
app.use(express.json());

// 中间件：解析 URL-encoded 请求体
app.use(express.urlencoded({ extended: true }));

// 路由：用户相关
const usersRouter = require('./routes/users');
app.use('/api/user', usersRouter);

// 路由：商品分类
const categoriesRouter = require('./routes/categories');
app.use('/api/category', categoriesRouter);

// 路由：商品信息
const productsRouter = require('./routes/products');
app.use('/api/product', productsRouter);

// 启动服务器
app.listen(PORT, () => {
  console.log(`🚀 Online Shop Mock API Server 已启动`);
  console.log(`📡 监听地址: http://localhost:${PORT}`);
  console.log(`📦 接口前缀: /api`);
  console.log('');
  console.log(`可用接口:`);
  console.log(`  POST /api/user/register     - 用户注册`);
  console.log(`  POST /api/user/login        - 用户登录`);
  console.log(`  GET  /api/user/info         - 用户信息`);
  console.log(`  GET  /api/category/list     - 分类列表`);
  console.log(`  GET  /api/category/:id      - 单个分类`);
  console.log(`  GET  /api/product/list      - 商品列表`);
  console.log(`  GET  /api/product/:id       - 商品详情`);
});
