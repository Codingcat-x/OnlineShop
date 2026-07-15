const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../utils/fileHelper');

/**
 * POST /api/user/register - 用户注册
 * Body: { name, email, phone, password }
 */
router.post('/register', (req, res) => {
  const { name, email, phone, password } = req.body;

  // 参数校验
  if (!name || !password) {
    return res.json({ code: 400, message: '用户名和密码不能为空' });
  }

  const users = readData('users.json');

  // 检查用户名是否已存在
  if (users.find(u => u.name === name)) {
    return res.json({ code: 400, message: '用户名已存在' });
  }

  // 创建新用户
  const newUser = {
    id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
    name,
    email: email || '',
    phone: phone || '',
    password,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  writeData('users.json', users);

  res.json({
    code: 200,
    message: '注册成功',
    data: { id: newUser.id, name: newUser.name, email: newUser.email }
  });
});

/**
 * POST /api/user/login - 用户登录
 * Body: { name, password }
 */
router.post('/login', (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.json({ code: 400, message: '用户名和密码不能为空' });
  }

  const users = readData('users.json');
  const user = users.find(u => u.name === name && u.password === password);

  if (!user) {
    return res.json({ code: 401, message: '用户名或密码错误' });
  }

  res.json({
    code: 200,
    message: '登录成功',
    data: { id: user.id, name: user.name, email: user.email, phone: user.phone }
  });
});

/**
 * GET /api/user/info - 获取用户信息（根据 ID）
 * Query: id
 */
router.get('/info', (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.json({ code: 400, message: '缺少用户 ID' });
  }

  const users = readData('users.json');
  const user = users.find(u => u.id === Number(id));

  if (!user) {
    return res.json({ code: 404, message: '用户不存在' });
  }

  res.json({
    code: 200,
    data: { id: user.id, name: user.name, email: user.email, phone: user.phone }
  });
});

module.exports = router;
