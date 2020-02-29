/*
入口js文件
 */
import Vue from 'vue'

import App from './App'
import router from './router/index'

export default new Vue({
  el: '#app',
  router:router,   //配置路由器
  render: h => h(App),
})
