<template>
  <div>
    <ul>
      <li>可同时展开多个面板，面板之间不影响</li>
      <z-collapse :selected.sync="data1">
        <z-collapse-item title="标题1" name="one">内容1</z-collapse-item>
        <z-collapse-item title="标题2" name="two">内容2</z-collapse-item>
        <z-collapse-item title="标题3"  name="three">内容3</z-collapse-item>
      </z-collapse>
        <pre><code>
          {{code1}}
        </code></pre>      
      <li>每次只能展开一个面板</li>
      <z-collapse :selected.sync="data2" accordion>
        <z-collapse-item title="标题1" name="one">内容1</z-collapse-item>
        <z-collapse-item title="标题2" name="two">内容2</z-collapse-item>
        <z-collapse-item title="标题3"  name="three">内容3</z-collapse-item>
      </z-collapse>
        <pre><code>
          {{code2}}
        </code></pre>        
    </ul>
  </div>
</template>
<script>
  import Collapse from '../../../src/collapse'
  import CollapseItem from '../../../src/collapse-item'

  export default {
    components: {
      'z-collapse': Collapse,
      'z-collapse-item': CollapseItem,
    },
    data () {
      return {
        data1: [],
        data2: [],
        code1: `
          <z-collapse :selected.sync="data1">
            <z-collapse-item title="标题1" name="one">内容1</z-collapse-item>
            <z-collapse-item title="标题2" name="two">内容2</z-collapse-item>
            <z-collapse-item title="标题3"  name="three">内容3</z-collapse-item>
          </z-collapse>
          ···
          data1: [],
        `.trim(),
        code2: `
          <z-collapse :selected.sync="data2" accordion>
            <z-collapse-item title="标题1" name="one">内容1</z-collapse-item>
            <z-collapse-item title="标题2" name="two">内容2</z-collapse-item>
            <z-collapse-item title="标题3"  name="three">内容3</z-collapse-item>
          </z-collapse>
          ···
          data1: [],
        `.trim()        
      }
    },
  }
</script>
