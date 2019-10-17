<template>
  <div>
    <z-tabs :selected.sync="tabs">
        <z-tabs-head>
          <z-tabs-item name="one">
            标签1
          </z-tabs-item>
          <z-tabs-item name="two">
            标签2
          </z-tabs-item>
          <z-tabs-item name="three" disabled>
            标签3
          </z-tabs-item>
        </z-tabs-head>
        <z-tabs-body>
          <z-tabs-pane name="one">内容 1</z-tabs-pane>
          <z-tabs-pane name="two">内容 2</z-tabs-pane>
          <z-tabs-pane name="three">内容 3</z-tabs-pane>
        </z-tabs-body>
    </z-tabs>
        <pre><code>
          {{code1}}
        </code></pre>  
  </div>
</template>
<script>
  import Tabs from '../../../src/tabs'
  import TabsHead from '../../../src/tabs-head'
  import TabsItem from '../../../src/tabs-item'
  import TabsBody from '../../../src/tabs-body'
  import TabsPane from '../../../src/tabs-pane'

  export default {
    components: {
      'z-tabs': Tabs,
      'z-tabs-head': TabsHead,
      'z-tabs-item': TabsItem,
      'z-tabs-body': TabsBody,
      'z-tabs-pane': TabsPane,
    },
    data () {
      return {
        tabs: 'one',
        code1: `
        <z-tabs :selected.sync="tabs">
            <z-tabs-head>
              <z-tabs-item name="one">
                标签1
              </z-tabs-item>
              <z-tabs-item name="two">
                标签2
              </z-tabs-item>
              <z-tabs-item name="three" disabled>
                标签3
              </z-tabs-item>
            </z-tabs-head>
            <z-tabs-body>
              <z-tabs-pane name="one">内容 1</z-tabs-pane>
              <z-tabs-pane name="two">内容 2</z-tabs-pane>
              <z-tabs-pane name="three">内容 3</z-tabs-pane>
            </z-tabs-body>
        </z-tabs>

        ...
        data () {
          return {
            tabs: 'one'
          }
        }
        ...
        `.trim(),        
      }
    },
  }
</script>
