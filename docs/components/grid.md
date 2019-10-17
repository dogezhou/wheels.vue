---
title: Grid 栅格
---

# Grid 栅格
24 栅格系统。

## 使用方法

<ClientOnly>
<grid-demos />
</ClientOnly>

## API

### Row API

| 参数     | 说明              | 类型            | 可选值               | 默认值  |
|--------|-----------------|---------------|-------------------|------|
| gutter | 栅格间隔            | number/string | —                 | 0    |
| align  | flex 布局下的水平排列方式 | string        | left/right/center | left |

### Col API

| 参数       | 说明            | 类型                                   | 可选值 | 默认值 |
|----------|---------------|--------------------------------------|-----|-----|
| span     | 栅格占据的列数	      | number/string                        | —   | —   |
| offset   | 栅格左侧的间隔格数	    | number/string                        | —   | 0   |
| ipad     | <768px 栅格属性对象 | object \(例如： \{span: 4, offset: 4\}） | —   | —   |
| narrowPc | ≥768px 栅格属性对象 | object \(例如： \{span: 4, offset: 4\}） | —   | —   |
| pc       | ≥992px 栅格属性对象 | object \(例如： \{span: 4, offset: 4\}） | —   | —   |
| widePc   | ≥1200px       | object \(例如： \{span: 4, offset: 4\}） | —   | —   |


## 笔记
- Row 接收 gutter 属性，Col 也需要知道 gutter， 可以通过 mounted 钩子中的 this.$children 设置子组件的 gutter 属性
- Vue 父子组件 create 和 mount 的顺序经过测试是这样的：父组件 created :arrow_right: 子组件 created :arrow_right: 子组件 mounted :arrow_right: 父组件 created