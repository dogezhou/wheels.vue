# wheels.vue - Vue UI 组件库

[![Build Status](https://travis-ci.com/dogezhou/wheels.vue.svg?token=S9BrsoFPAZWAy5gdzFSy&branch=master)](https://travis-ci.com/dogezhou/wheels.vue)

## 介绍

## 开始使用

1. 安装

使用前，css 启用 border-box
IE 8 及以上浏览器支持
```css
*,*::before,*::after{ box-sizing: border-box }
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码


---
## 组件介绍

### 1. 栅格系统
参考 ant design 的 API 设计一列 24 等分，设计两个组件 z-row, z-col。  
z-col: span 属性指定该列所占栅格; offset 属性指定该列偏移的栅格数量
z-row: gutter 属性指定 col 之间间隙

### 2. 布局组件
参考 ant design 五个布局组件

### 3. Toast 组件
提示信息, 希望实现这样的使用方式
```javascript
  this.$toast('提示内容')
```
一种方法是直接修改 Vue.prototype.$toast, 但是可能会覆盖用户的自定义的，侵入性太强  
```javascript
  import Vue from 'vue' // 还有可能用户区分版本设置了别名，例如 vue2, 并不确定
  Vue.prototype.$toast = function () {
    console.log('提示信息')
  }
```
第二种方法使用 Vue 提供的插件功能，做成一个插件, 用户自己使用 use 决定使用。  
toast 是动态创建的，可以使用原生 dom api, 但是没有使用到 vue 的功能，所以使用 Vue 的动态创建组件功能，
可以参考 Vue.extend https://cn.vuejs.org/v2/api/#Vue-extend，更完整的 Vue 动态创建组件方式请看这篇文章
https://css-tricks.com/creating-vue-js-component-instances-programmatically/

### 4. tabs 组件
tabs 组件切换的时候有很多组件通信的内容，可以通过父子组件的通信来完成，但是过于复杂，可以通过一个第三方的事件中心
管理，vue 文档有写, 通过一个新的 vue 实例作为 EventBus

### 5. popover 弹出框组件
popover 的难点不在于控制弹出框的显示和消失，而在于CSS, 使他出现在按钮正上方。  
1. 首先弹出框组件如果被包裹在 over-flow: hidden 的 tag 中，弹出内容显示出问题，所以 ant-design 把弹出内容放到了
body tag 中。  
2. 移到 body 中之后需要设置弹出内容的 position, getBoundingClientRect 获取的是元素在可视范围上的 top, left,
但是 position absolute 是相对于 body 元素的，需要把 window.scrollY （文档 body 顶部到可视范围顶部的距离）
 和 window.scrollX 加上