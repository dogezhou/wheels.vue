import Toast from './toast'

function createToast ({Vue, message, propsData, onClose}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData
  })
  toast.$slots.default = [message]
  toast.$mount()  // 到内存中
  toast.$on('close', onClose) // 设置 currentToast 为 null, 避免多次调用 close
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
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null
        }
      })
    }
  }
}