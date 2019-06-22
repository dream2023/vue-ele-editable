import Vue from 'vue'
import App from './App.vue'
import EleEditable from '../src/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import CustomRate from './CustomRate'
import CustomSlider from './CustomSlider'
Vue.component(CustomRate.name, CustomRate)
Vue.component(CustomSlider.name, CustomSlider)

Vue.use(ElementUI)
Vue.use(EleEditable, {
  image: {
    lazy: true
  },
  number: {
    step: 10
  }
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
