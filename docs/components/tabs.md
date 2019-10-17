---
title: Tabs 标签页
---

# Tabs 标签页
分隔内容上有关联但属于不同类别的数据集合。

## 使用方法

<ClientOnly>
<tabs-demos />
</ClientOnly>


## API

### Tabs API

| 参数       | 说明    | 类型     | 可选值 | 默认值 |
|----------|-------|--------|-----|-----|
| selected | 选中项名字 | string | —   | —   |

### TabsItem API

| 参数       | 说明   | 类型      | 可选值 | 默认值   |
|----------|------|---------|-----|-------|
| name     | 项目名字 | string  | —   | —     |
| disabled | 禁用   | Boolean | —   | false |

### TabsPane API

| 参数       | 说明   | 类型      | 可选值 | 默认值   |
|----------|------|---------|-----|-------|
| name     | 项目名字 | string  | —   | —     |
| disabled | 禁用   | Boolean | —   | false |

## 笔记
- 组件通信复杂，使用 [provide / inject](https://cn.vuejs.org/v2/api/#provide-inject) 提供一个
EventBus
- tabs 切换时的滑块动画使用 js 计算相对屏幕左边的位置 （getBoundingClientRect）