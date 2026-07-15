const express = require('express');
const router = express.Router();
const { readData } = require('../utils/fileHelper');

/**
 * GET /api/product/list - 获取商品列表（支持筛选）
 * Query:
 *   categoryId - 按分类筛选
 *   keyword    - 按关键字搜索
 *   isHot      - 热销商品
 *   isNew      - 新品上架
 *   page       - 页码（默认 1）
 *   pageSize   - 每页数量（默认 20）
 */
router.get('/list', (req, res) => {
  let products = readData('products.json');
  const { categoryId, keyword, isHot, isNew, page = 1, pageSize = 20 } = req.query;

  // 按分类筛选（支持父分类和子分类）
  if (categoryId) {
    const catId = Number(categoryId);
    if (catId < 100) {
      // 父分类：匹配该父分类下的所有子分类
      const categories = readData('categories.json');
      const parent = categories.find(c => c.id === catId);
      const childIds = parent ? parent.children.map(c => c.id) : [];
      products = products.filter(p => childIds.includes(p.categoryId));
    } else {
      // 子分类：精确匹配
      products = products.filter(p => p.categoryId === catId);
    }
  }

  // 按关键字搜索（匹配商品名和描述）
  if (keyword) {
    const kw = keyword.toLowerCase();
    products = products.filter(p =>
      p.name.toLowerCase().includes(kw) || p.desc.toLowerCase().includes(kw)
    );
  }

  // 热销商品
  if (isHot === 'true') {
    products = products.filter(p => p.isHot);
  }

  // 新品
  if (isNew === 'true') {
    products = products.filter(p => p.isNew);
  }

  // 分页
  const total = products.length;
  const pageNum = Math.max(1, Number(page));
  const size = Math.max(1, Math.min(100, Number(pageSize)));
  const totalPages = Math.ceil(total / size);
  const start = (pageNum - 1) * size;
  const items = products.slice(start, start + size);

  res.json({
    code: 200,
    data: {
      items,
      pagination: {
        page: pageNum,
        pageSize: size,
        total,
        totalPages
      }
    }
  });
});

/**
 * GET /api/product/:id - 获取单个商品详情
 */
router.get('/:id', (req, res) => {
  const products = readData('products.json');
  const product = products.find(p => p.id === Number(req.params.id));

  if (!product) {
    return res.json({ code: 404, message: '商品不存在' });
  }

  res.json({
    code: 200,
    data: product
  });
});

module.exports = router;
