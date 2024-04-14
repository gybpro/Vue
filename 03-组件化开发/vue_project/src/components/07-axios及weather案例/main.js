// 引入vue.js文件
import Vue from 'vue'
// 导入App组件（根组件）
// import App from './App.vue'
import App from './components/07-Ajax及Weather案例/App.vue'

// 关闭生产提示信息
Vue.config.productionTip = false

// 创建Vue实例，并挂载到app容器
new Vue({
  render: h => h(App),
  beforeCreate() {
    // 全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
