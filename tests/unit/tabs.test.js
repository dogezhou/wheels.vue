const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('z-tabs', Tabs)
Vue.component('z-tabs-head', TabsHead)
Vue.component('z-tabs-body', TabsBody)
Vue.component('z-tabs-item', TabsItem)
Vue.component('z-tabs-pane', TabsPane)
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs 组件', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected prop', (done) => {

    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <z-tabs selected="tab1">
        <z-tabs-head>
          <z-tabs-item name="tab1"> tab1 </z-tabs-item>
          <z-tabs-item name="tab2"> tab2 </z-tabs-item>
          <z-tabs-item name="tab3"> tab3 </z-tabs-item>
        </z-tabs-head>
        <z-tabs-body>
          <z-tabs-pane name="tab1"> tab1 content </z-tabs-pane>
          <z-tabs-pane name="tab2"> tab2 content </z-tabs-pane>
          <z-tabs-pane name="tab3"> tab3 content </z-tabs-pane>
        </z-tabs-body>
      </z-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="tab1"]`)
      expect(x.classList.contains('active')).to.equal(true)
      done()
    })
  })
})