# Online Shop Project for Vue

## Day .1 Initialize a Vue CLI Project

### Environmental Preparation

Node.js + Webpack + Vue

### Explanation of Contents

- `node_modules`: Project dependency folder
- `public`: Usually, some static resource files such as images, CSS, JS, HTML, etc. are placed there. The static resources in the "public" folder will be copied to the "dist" directory during the webpack packaging process.

- `src`: Program source code folder

  - `assets`: Static resource folder, usually used to store the static resources that are shared by multiple components.

...

### 2. Other configurations of the project

#### 2.1 When starting the project, have the browser automatically open.

```json
"scripts": {
    "serve": "vue-cli-service serve --open",
}
```

#### 2.2 Eslint verification function has been turned off
当声明一个变量未使用时，使项目仍能正常运行。
在 `vue.config.js` 文件中添加如下代码：
```js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})
```

#### 2.3 src 文件夹简写方法，配置别名
jsconfig.json 文件中添加如下代码
```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*" // 使用@符号引用src目录下的文件
      ]
    }
  }
}
```

#### 3. 项目路由的分析
` vue-router `: kv键值对
- key: url
- value: 路由组件