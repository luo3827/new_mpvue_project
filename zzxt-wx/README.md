# zzxt-wx

> a demo

## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
npm install

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report


# 添加对scss的支持
npm i sass-loader node-sass --save-dev
# mpvue下如何处理sass全局引入sass资源文件的步骤:
## 1.首先需要安装sass-resource-loader
npm install sass-resources-loader --save-dev
## 2.然后是找到工程根目录下的build/utils.js文件，我们新增一个loader对象(做sass处理时，_variable.scss为公共变量和方法的文件：)
  resources数组中，放的是需要引入的sass资源文件的路径。声明对象的位置最好与其他loader同级

 var sassResourceLoader = {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        path.resolve(__dirname, '../src/assets/css/_variable.scss'),
      ]
    }
  }
## 3.然后改写一下generateLoaders函数 
 函数  generateLoaders(loader, loaderOptions)  加参数  anotherLoader，并在函数中添加  if (!!anotherLoader) loaders.push(anotherLoader)

 最后在return中更改如下内容
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
    update后：
        sass: generateLoaders('sass', { indentedSyntax: true }, sassResourceLoader),
        scss: generateLoaders('sass', {}, sassResourceLoader),


# 安装 mpvue-echarts 及 echarts 插件
## mpvue-echarts
npm i mpvue-echarts --save
## echarts
npm i echarts --save

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).