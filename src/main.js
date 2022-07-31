import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'                     // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'         // element-ui的css样式要单独引入
import axios from 'axios'
import router from './router'
import qs from 'qs'

// axios.defaults.baseURL="http://localhost:7721"
axios.defaults.baseURL="http://114.116.245.5:7721"
axios.defaults.headers.post['Content-Type']='application/json'
Vue.prototype.$axios = axios.create(
    {
      // baseURL: "http://localhost:7721",
      baseURL: "http://114.116.245.5:7721",
      transformRequest: [
        data => JSON.stringify(data)
      ]
    }
)

Vue.use(ElementUI);   // 这种方式引入了ElementUI中所有的组件

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
