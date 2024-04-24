// 引入vue.js文件
import Vue from 'vue'
// 导入App组件（根组件）
// import App from './App.vue'
import App from '@/components/10-vuex模块化开发/App.vue'

// 关闭生产提示信息
Vue.config.productionTip = false

import store from '@/components/10-vuex模块化开发/vuex/store'

// 创建Vue实例，并挂载到app容器
new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
