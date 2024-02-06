// 引入vue.js文件
import Vue from 'vue'
// 导入App组件（根组件）
// import App from './App.vue'
import App from './components/04-plugins插件/App.vue'

// 导入插件
import { p1 } from './components/04-plugins插件/plugins.js'

// 关闭生产提示信息
Vue.config.productionTip = false

// 插件的使用通常放在Vue实例创建之前
// 使用插件
Vue.use(p1, 1, 2, 3, 4);

// 创建Vue实例，并挂载到app容器
new Vue({
    render: h => h(App)
}).$mount('#app')
