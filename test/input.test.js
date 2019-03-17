const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input 组件', () => {
    it('存在.', () => {
        expect(Input).to.exist
    })

    describe('props 测试', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        })
        it('接收 value', () => {
            const value = '12345'
            vm = new Constructor({
                propsData: {
                    value
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal(value)
        })
        it('接收 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('接收 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('接收 error', () => {
            vm = new Constructor({
                propsData: {
                    error: '输入出错'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('输入出错')
        })
    })
    describe('事件测试', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        })
        it('支持 change , input, focus, blur 事件', () => {
            ['change', 'input', 'focus', 'blur']
                .forEach((eventName) => {
                    vm = new Constructor({}).$mount()
                    const callback = sinon.fake();
                    vm.$on(eventName, callback)
                    //触发input的change 事件
                    let event = new Event(eventName);
                    let inputElement = vm.$el.querySelector('input')
                    inputElement.dispatchEvent(event)
                    expect(callback).to.have.been.calledWith(event)
                })
        })
    })
}) 