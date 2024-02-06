// 引入vue.js文件
import Vue from 'vue'
// 导入App组件（根组件）
// import App from './App.vue'
import App from './components/03-mixin混入/App.vue'

// 关闭生产提示信息
Vue.config.productionTip = false

import { mix1, mix2, mix3 } from './components/03-mixin混入/mixin.js'

// 全局混入
Vue.mixin(mix1)
Vue.mixin(mix2)
Vue.mixin(mix3)
// mixin中的方法先加载，会被局部方法覆盖
// mixin中的钩子方法也会先执行，后执行组件的钩子方法

// 创建Vue实例，并挂载到app容器
new Vue({
    render: h => h(App)
}).$mount('#app')
