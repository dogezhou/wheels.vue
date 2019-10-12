// 一个监听处理所有 click-outside
const onClickDocument = (e) => {
  const { target } = e
  callbacks.forEach(item => {
    const { el, callback } = item
    if (target === el || item.el.contains(target)) {
      return
    } else {
      callback()
    }
  })
}

document.addEventListener('click', onClickDocument)
const callbacks = []

export default {
  bind: function (el, binding) {
    callbacks.push({ el, callback: binding.value })
  }
}

const removeListener = () => {
  document.removeEventListener('click', onClickDocument)
}
