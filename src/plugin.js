import Toast from './toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: toastOptions
      })
      toast.$slots.default = [message]
      toast.$mount()  // 到内存中
      document.body.appendChild(toast.$el) // 并挂载到 document 上
    }
  }
}