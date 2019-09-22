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
