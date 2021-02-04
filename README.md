<p align="center">
  <a href="https://github.com/liub1934/uni-lb-tabbar">
    <img src="https://img.shields.io/github/stars/liub1934/uni-lb-tabbar">
  </a>
  <a href="https://github.com/liub1934/uni-lb-tabbar/fork">
    <img src="https://img.shields.io/github/forks/liub1934/uni-lb-tabbar">
  </a>
  <a href="https://github.com/liub1934/uni-lb-tabbar/issues">
    <img src="https://img.shields.io/github/issues/liub1934/uni-lb-tabbar">
  </a>
  <a href="https://www.npmjs.com/package/uni-lb-tabbar">
    <img src="https://img.shields.io/npm/v/uni-lb-tabbar">
  </a>
  <a href="https://npmcharts.com/compare/uni-lb-tabbar?minimal=true">
    <img src="https://img.shields.io/npm/dm/uni-lb-tabbar">
  </a>
  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen">
  </a>
  <a href="https://github.com/liub1934/uni-lb-tabbar/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/liub1934/uni-lb-tabbar">
  </a>
</p>

由于项目中经常需要用到自定义的 Tabbar，原生的 Tabbar 可自定义性有局限性，将之前写的组件加以整理，弄出一个通用的组件。

Github：[点击前往](https://github.com/liub1934/uni-lb-tabbar)

<!-- 插件市场：[点击前往](https://ext.dcloud.net.cn/plugin?id=1111)   -->

H5 Demo：[点击预览](https://github.liubing.me/uni-lb-tabbar)

> 如果问题最好去 github 反馈，插件市场评论区留下五星好评即可， [点我去反馈](https://github.com/liub1934/uni-lb-tabbar/issues/new)  
> 最好提供一下使用的什么端，数据结构及大概的代码，我好复现找问题，不要直接提`怎么xxx报错了`等没意义的问题，神仙也不知道你为啥报错了。

## 兼容性

App + H5 + 各平台小程序（头条小程序及 Nvue 暂不支持）

## 引入插件

推荐使用 easycom 引入

导入插件后再`pages.json`加上如下配置：

```json
"easycom": {
  "autoscan": true,
  "custom": {
    "lb-tabbar-item": "@/components/lb-tabbar/lb-tabbar-item.vue"
  }
}
```

<!-- npm 安装引入：

```shell
npm install uni-lb-tabbar
```

npm 安装完成后再`pages.json`加上如下配置：

```json
"easycom": {
  "autoscan": true,
  "custom": {
    "lb-tabbar": "uni-lb-tabbar/lb-tabbar.vue",
    "lb-tabbar-item": "uni-lb-tabbar/lb-tabbar-item.vue"
  }
}
``` -->

## Props 参数

### Tabbar Props

| 参数                     | 说明                                                     | 类型          | 可选值                                   | 默认值  |
| :----------------------- | :------------------------------------------------------- | ------------- | ---------------------------------------- | ------- |
| active                   | 选中标签的 name                                          | String/Number | -                                        | -       |
| height                   | Tabbar 高度                                              | String        | -                                        | 50px    |
| icon-size                | 图标大小                                                 | String        | -                                        | 22px    |
| text-size                | 文字大小                                                 | String        | -                                        | 12px    |
| text-height              | 文字高度                                                 | String        | -                                        | 18px    |
| dot-color                | 小红点颜色                                               | String        | -                                        | #F56C6C |
| fixed                    | 是否固定在底部                                           | Boolean       | true/false                               | true    |
| placeholder              | 是否生成等高的占位块                                     | Boolean       | true/false                               | true    |
| animate                  | 图标动画（引用了部分 Animate.css 库的动画效果）          | String        | zoomIn/bounce/rubberBand/bounceIn/fadeIn | -       |
| close-animate-on-raisede | 是否关闭凸起图标动画                                     | Boolean       | true/false                               | true    |
| border                   | 是否展示边框                                             | Boolean       | true/false                               | true    |
| border-color             | 边框颜色                                                 | String        | -                                        | #DCDFE6 |
| bg-color                 | 背景色，默认是白色背景                                   | String        | -                                        | #FFF    |
| inactive-color           | 未选中标签的颜色                                         | String        | -                                        | #909399 |
| active-color             | 选中标签的颜色                                           | String        | -                                        | #409EFF |
| active-text-color        | 可单独定义未选中标签文字的颜色，不填则同`inactive-color` | String        | -                                        | -       |
| active-text-color        | 可单独定义选中标签文字的颜色,不填则同`active-color`      | String        | -                                        | -       |

### TabbarItem Props

| 参数        | 说明                                                             | 类型          | 可选值     | 默认值 |
| :---------- | :--------------------------------------------------------------- | ------------- | ---------- | ------ |
| name        | 标签的 name 名称                                                 | String/Number | -          | -      |
| icon        | icon 图标，可为图片地址，如果是 icon 图标不需要带前缀，如`icon-` | String        | -          | -      |
| icon-prefix | icon 图标前缀                                                    | String        | -          | -      |
| dot         | 是否显示小红点                                                   | Boolean       | true/false | -      |
| info        | 图标右上角信息                                                   | String/Number | -          | -      |
| raisede     | 图标是否凸出                                                     | Boolean       | true/false | -      |

## Tabbar Event

| 事件名 | 说明           | 参数                          |
| :----- | :------------- | ----------------------------- |
| change | 切换标签时触发 | 当前选中`TabbarItem`的`props` |

## Tabbar Methods

| 方法名          | 说明                                          |
| :-------------- | :-------------------------------------------- |
| getTabbarHeight | 需要在`onReady`中调用，返回 Tabbar 的实际高度 |
