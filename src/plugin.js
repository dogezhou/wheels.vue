import Toast from './toast'

function createToast ({Vue, message, propsData}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData
  })
  toast.$slots.default = [message]
  toast.$mount()  // 到内存中
  document.body.appendChild(toast.$el) // 并挂载到 document 上
  return toast
}

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({Vue, message, propsData: toastOptions})
    }
  }
}