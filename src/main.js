import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import { Message, Loading } from 'element-ui'

import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
import './style/index.less'
import './router/permission'
import './mock'

Vue.use(Loading)

Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
