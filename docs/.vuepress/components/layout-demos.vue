<template>
  <div>
    <ul>
      <li>常用布局</li>
      <z-layout class="layout">
        <z-header class="header">header</z-header>
        <z-content class="content">content</z-content>
        <z-footer class="footer">footer</z-footer>
      </z-layout>
      <hr/>
      <z-layout class="layout">
          <z-sider class="sider">sider</z-sider>
          <z-layout>
              <z-header class="header">header</z-header>
              <z-content class="content">content</z-content>
              <z-footer class="footer">footer</z-footer>
          </z-layout>
      </z-layout>
      <hr/>
      <z-layout class="layout">
          <z-header class="header">header</z-header>
          <z-layout>
              <z-sider class="sider">sider</z-sider>
              <z-content class="content">content</z-content>
          </z-layout>
          <z-footer class="footer">footer</z-footer>
      </z-layout>
      <pre><code>
        {{code}}
      </code></pre>      
    </ul>

  </div>
</template>
<script>
  import Layout from '../../../src/layout'
  import Header from '../../../src/Header'
  import Content from '../../../src/content'
  import Footer from '../../../src/footer'
  import Sider from '../../../src/Sider'

  export default {
    components: {
      'z-layout': Layout,
      'z-header': Header,
      'z-content': Content,
      'z-footer': Footer,
      'z-sider': Sider,

    },
    data () {
      return {
        code: `
        <z-layout class="layout">
          <z-header class="header">header</z-header>
          <z-content class="content">content</z-content>
          <z-footer class="footer">footer</z-footer>
        </z-layout>

        <z-layout class="layout">
            <z-sider class="sider">sider</z-sider>
            <z-layout>
                <z-header class="header">header</z-header>
                <z-content class="content">content</z-content>
                <z-footer class="footer">footer</z-footer>
            </z-layout>
        </z-layout>
        
        <z-layout class="layout">
            <z-header class="header">header</z-header>
            <z-layout>
                <z-sider class="sider">sider</z-sider>
                <z-content class="content">content</z-content>
            </z-layout>
            <z-footer class="footer">footer</z-footer>
        </z-layout>        
        `.trim(),        
      }
    },
  }
</script>

<style lang="scss" scoped>
.header, .footer, .content, .sider {
  color: white;
  text-align: center;
  font-size: 18px;
}
.header, .footer {
  background: rgb(62, 175, 124);
  padding: 8px 0;
}
.sider {
  background: rgba(62, 175, 124, 0.5);
}
.content {
  background: rgba(62, 175, 124, 0.7);
  padding: 60px 0;
}
.sider {
  padding: 8px 24px;
  line-height: 130px;
}
</style>
