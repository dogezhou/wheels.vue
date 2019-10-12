const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('popover 组件', () => {
  it('存在', () => {
    expect(Popover).to.be.exist
  })

  it('设置 position', (done) => {
    Vue.component('z-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <z-popover position="bottom" ref="popover">
        <template slot="content">弹出能容</template>
        <button>按钮</button>
      </z-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      expect(vm.$refs.popover.$refs.contentWrapper.classList.contains('position-bottom')).to.be.true
      done()
    })
  })

  // TODO: 测试不同 trigger
  it.skip('设置 trigger', (done) => {
    Vue.component('z-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <z-popover trigger="hover" ref="popover">
        <template slot="content">弹出能容</template>
        <button>按钮</button>
      </z-popover>
    `
    const vm = new Vue({
      el: div
    })
    done()
  })
})