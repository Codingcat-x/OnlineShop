const fs = require('fs');
const path = require('path');

/**
 * 读取 JSON 数据文件
 * @param {string} filename - 文件名（如 'users.json'）
 * @returns {Array|Object}
 */
function readData(filename) {
  const filePath = path.join(__dirname, '..', 'data', filename);
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error(`读取数据文件 ${filename} 失败:`, err.message);
    return [];
  }
}

/**
 * 写入 JSON 数据文件
 * @param {string} filename - 文件名
 * @param {*} data - 要写入的数据
 */
function writeData(filename, data) {
  const filePath = path.join(__dirname, '..', 'data', filename);
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error(`写入数据文件 ${filename} 失败:`, err.message);
  }
}

module.exports = { readData, writeData };
