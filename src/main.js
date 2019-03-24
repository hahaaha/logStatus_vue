import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
