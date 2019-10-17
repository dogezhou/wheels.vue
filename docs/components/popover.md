---
title: Popover 弹出框
---

# Popover 弹出框
常用于展示鼠标 click, hover 时的提示信息。

## 使用方法

<ClientOnly>
<popover-demos />
</ClientOnly>

## API

| 参数       | 说明   | 类型     | 可选值                   | 默认值   |
|----------|------|--------|-----------------------|-------|
| trigger  | 触发方式 | string | hover/click           | click |
| position | 位置   | String | top/left/bottom/right | top   |


## 笔记
- popover 的难点不在于控制弹出框的显示和消失，而在于CSS, 使他出现在按钮正上方。  
- 处理弹出框的点击事件时不要使用 click.stop 阻止冒泡，避免使用者无法监听点击事件，使用 this.$ref.name.contains
 (event.target) 来判断点击元素来处理
 
1. 首先弹出框组件如果被包裹在 over-flow: hidden 的 tag 中，弹出内容显示出问题，所以 ant-design 把弹出内容放到了
body tag 中。  
2. 移到 body 中之后需要设置弹出内容的 position, getBoundingClientRect 获取的是元素在可视范围上的 top, left,
但是 position absolute 是相对于 body 元素的，需要把 window.scrollY （文档 body 顶部到可视范围顶部的距离）
 和 window.scrollX 加上
