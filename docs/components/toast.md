---
title: Toast 消息提示
---

# Toast 消息提示
常用于主动操作后的反馈提示。

## 使用方法

<ClientOnly>
<toast-demos />
</ClientOnly>

## API

| 参数          | 说明        | 类型                                                           | 可选值               | 默认值 |
|-------------|-----------|--------------------------------------------------------------|-------------------|-----|
| autoClose   | 是否自动关闭及时长 | Boolean/Number                                               | —                 | 5   |
| position    | 位置        | String                                                       | top/middle/bottom | top |
| enableHtml  | 是否支持 html | boolean                                                      | —                 | —   |
| closeButton | 关闭按钮对象    | object \(例如：\{text: '关闭', callback \(\) \{ alert\('ddd'\) \} | —                 | —  

## 笔记
- 提示信息, 希望实现这样的使用方式
```javascript
  this.$toast('提示内容')
```
- 一种方法是直接修改 Vue.prototype.$toast, 但是可能会覆盖用户的自定义的，侵入性太强  
```javascript
  import Vue from 'vue' // 还有可能用户区分版本设置了别名，例如 vue2, 并不确定
  Vue.prototype.$toast = function () {
    console.log('提示信息')
  }
```
- 第二种方法使用 Vue 提供的插件功能，做成一个插件, 用户自己使用 use 决定使用。  
toast 是动态创建的，可以使用原生 dom api, 但是没有使用到 vue 的功能，所以使用 Vue 的动态创建组件功能，
可以参考 [Vue.extend](https://cn.vuejs.org/v2/api/#Vue-extend)，更完整的 Vue 动态创建组件方式请看这篇文章
[creating-vue-js-component-instances-programmatically](https://css-tricks.com/creating-vue-js-component-instances-programmatically/)