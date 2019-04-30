// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 注册路由
import VueRouter from 'vue-router'

// 引入Element
import ELementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

// 引入自定义路由页面
import Routes from './routes'

import App from './App'

Vue.config.productionTip = false

// 注册Element
Vue.use(ELementUI)

// 注册路由
Vue.use(VueRouter)

// 创建一个路由
const router = new VueRouter({
  routes: Routes,
  mode: "history"
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router: router
})
