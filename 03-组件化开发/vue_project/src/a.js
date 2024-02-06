// 引入vue.js文件
import Vue from 'vue'
// 导入App组件（根组件）
import App from './App.vue'

// 关闭生产提示信息
Vue.config.productionTip = false

// 创建Vue实例，并挂载到app容器
new Vue({
  render: h => h(App),
}).$mount('#app')
