// 引入vue.js文件
import Vue from 'vue'
// 导入App组件（根组件）
// import App from './App.vue'
import App from "./components/08-vuex核心对象/App.vue";

// 关闭生产提示信息
Vue.config.productionTip = false

// 引入Vuex插件中的核心对象store
import store from './components/08-vuex核心对象/vuex/store'

// 创建Vue实例，并挂载到app容器
new Vue({
    render: h => h(App),
    // store配置项，加上此配置项后，所有vm、vc对象上都会有$store属性
    // 通过vm.$store或vc.$store可以访问store对象
    store
}).$mount('#app')
