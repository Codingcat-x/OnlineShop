

<div align="center">

[![Vue 2](https://img.shields.io/badge/Vue-2.6.14-4FC08D?logo=vue-dot-js&logoColor=white)](https://v2.vuejs.org/)
[![Vuex](https://img.shields.io/badge/Vuex-3.6.2-34495E?logo=vuex&logoColor=white)](https://vuex.vuejs.org/)
[![Vue CLI](https://img.shields.io/badge/Vue%20CLI-5.0-4FC08D?logo=vue-dot-js&logoColor=white)](https://cli.vuejs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Axios](https://img.shields.io/badge/Axios-1.18.1-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)
[![Mock.js](https://img.shields.io/badge/Mock.js-1.1.0-8A2BE2)](https://mockjs.com/)
<h1>在线商城项目</h1>
</div>

基于 **Vue 2** + **Bootstrap 5** 构建的电商前端项目。采用 **Vuex** 统一管理全局状态，页面图标来自 **Bootstrap Icons**；通过 **Axios** 发起 HTTP 请求获取数据。由于本项目不包含后端服务，数据由 **Mock.js** 在浏览器端拦截并模拟接口返回。

## 运行方法

新建一个文件夹在你想要存放项目的地方，然后通过cmd打开。

执行以下命令

克隆项目
``` terminal
git clone https://github.com/Codingcat-x/OnlineShop.git
```
进入前端根目录
``` terminal
cd client
```
下载所需依赖
``` terminal
npm install
```
启动开发服务器，访问 http://localhost:8080
``` terminal
npm run serve
```