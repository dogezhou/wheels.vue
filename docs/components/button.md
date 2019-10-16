---
title: Button 按钮
---
# 按钮
基础的操作按钮

## 使用方法

<ClientOnly>
<button-demos />
</ClientOnly>

``` html
<z-button>按钮</z-button>
<z-button :loading="true">按钮</z-button>
<z-button icon="settings">按钮</z-button>
<z-button icon="info" iconPosition="right">按钮</z-button>
<z-button disabled>按钮</z-button>
<z-button-group>
  <z-button icon="left">上一页</z-button>
  <z-button >中间</z-button>
  <z-button icon="right" icon-position="right">下一页</z-button>
</z-button-group>
```

## API

| 参数           | 说明      | 类型      | 可选值          | 默认值   |
|--------------|---------|---------|--------------|-------|
| loading      | 是否加载中状态 | boolean | —            | false |
| icon         | 按钮图标    | string  | —            | —     |
| iconPosition | 图标位置    | string  | left / right | left  |
| disabled     | 是否禁用状态	 | boolean | —	           | false |

## 笔记
- z-button-group 组件 slot 需要直接是 z-button, 不然样式会出问题, 可以在 mounted 钩子中检查 this.$el.children 是否是 button