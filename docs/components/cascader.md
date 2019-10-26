---
title: Cascader 级联选择器
---
# Cascader 级联选择器
当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。


## 使用方法

<ClientOnly>
<cascader-demos />
</ClientOnly>

## API

| 参数              | 说明        | 类型                                                                 | 可选值 | 默认值 |
|-----------------|-----------|--------------------------------------------------------------------|-----|-----|
| source          | 数据源       | array                                                              | —	  | —	  |
| selected        | 选中项绑定值	   | array                                                              | —   | —	  |
| popover\-height | 弹出框高度     | string                                                             | —   | —   |
| load\-data      | 加载动态数据的方法 | function\(node, callback\), node为当前点击的节点，resolve为数据加载完成的回调\(必须调用\) | —   | —   |


## 笔记
- 要实现不限定深度的层级结构，可以使用 cascader-item [递归组件](https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E9%80%92%E5%BD%92%E7%BB%84%E4%BB%B6)
- 动态加载数据时，为了更准确的显示节点的是否还有子节点的状态，需要在节点数据添加是否为叶子节点的标志位（isLeaf），这是参考的 [element cascader 动态加载](https://element.eleme.cn/#/zh-CN/component/cascader#dong-tai-jia-zai)
- 动态加载数据时，把获取的数据插入点击的数据节点之中，可以通过 this.$set 实现，但是这修改了 props, 不符合 Vue [单向数据流](https://cn.vuejs.org/v2/guide/components-props.html#%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81)的原则, 所以还是通过事件更新
- popover 时做过的点击浮层外部关闭浮层的 DOM 操作可以通过 vue 提供的[自定义指令](https://cn.vuejs.org/v2/guide/custom-directive.html#ad) 进行封装