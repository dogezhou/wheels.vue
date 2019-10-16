---
title: Input 输入框
---

# Input 输入框
普通输入框

## 使用方法

<ClientOnly>
<input-demos />
</ClientOnly>

``` html
<z-input value="请输入"></z-input>
<z-input value="只读输入框" readonly></z-input>
<z-input value="禁用输入框" disabled></z-input>
<z-input v-model="errorMsg" error="请重新输入"></z-input>
```

## API

| 参数       | 说明      | 类型      | 可选值 | 默认值   |
|----------|---------|---------|-----|-------|
| value/v-model    | 绑定值     | string  | —   | —     |
| error    | 错误提示    | string  | —   | —     |
| readonly | 是否只读    | boolean | —   | false |
| disabled | 是否禁用状态	 | boolean | —   | false |

## 笔记
- [自定义组件的-v-model](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model)