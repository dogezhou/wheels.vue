const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast 组件', () => {
  it('存在', () => {
    expect(Toast).to.exist
  })

  describe('props 测试', function () {
    it('接受 autoClose', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 1,
        }
      }).$mount(div)
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
  })
  it('接受 closeButton', (done) => {
    const callback = sinon.fake();
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        closeButton: {
          text: '关闭',
          callback,
        },
      }
    }).$mount()
    let closeButton = vm.$el.querySelector('.close')
    expect(closeButton.textContent.trim()).to.eq('关闭')
    // 点击关闭太快，this.$nextTick 中 this.$refs.line 就拿不到
    setTimeout(() => {
      closeButton.click()
      expect(callback).to.have.been.called
      done()
    })
  })
  it('接受 enableHtml', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {enableHtml: true}
    })
    vm.$slots.default = ['<strong id="test">hi</strong>']
    vm.$mount()
    // 可以通过选择器选到 test 那就是标签而不是文本
    const strong = vm.$el.querySelector('#test')
    expect(strong).to.exist
  })
  it('接受 position', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        position: 'bottom'
      }
    }).$mount()
    expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
  })
})