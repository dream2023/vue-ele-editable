import EleEditable from './EleEditable'

const Plugin = {}

Plugin.install = function (Vue, params = {}) {
  Vue.prototype.$EleEditableParams = params
  Vue.component(EleEditable.name, EleEditable)
}

if (typeof window !== 'undefined' && window.Vue) {
  Plugin.install(window.Vue)
}

export { EleEditable }
export default Plugin
