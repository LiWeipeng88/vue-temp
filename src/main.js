import Vue from 'vue'
import App from './App.vue'
import router from './router'
import request from '@/utils/request.js'
import store from './store'
import ElementUI from 'element-ui'
import Mixin from '@/mixin'

import '@/components'
import 'normalize.css/normalize.css' // 兼容各浏览器的标准样式
import 'nprogress/nprogress.css' // 顶部进度条样式
import '@/assets/styles/styles.scss'
Vue.use(ElementUI)
Vue.use(Mixin)
Vue.prototype.$http = request
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
