const express = require('express');
const router = express.Router();
const { readData } = require('../utils/fileHelper');

/**
 * GET /api/category/list - 获取全部分类
 */
router.get('/list', (req, res) => {
  const categories = readData('categories.json');
  res.json({
    code: 200,
    data: categories
  });
});

/**
 * GET /api/category/:id - 获取单个分类
 */
router.get('/:id', (req, res) => {
  const categories = readData('categories.json');
  const category = categories.find(c => c.id === Number(req.params.id));

  if (!category) {
    return res.json({ code: 404, message: '分类不存在' });
  }

  res.json({
    code: 200,
    data: category
  });
});

module.exports = router;
