// 引入vue.js文件
import Vue from 'vue'
// 导入App组件（根组件）
import App from './components/01-单文件组件/App.vue'

// 关闭生产提示信息
Vue.config.productionTip = false

// 创建Vue实例，并挂载到app容器
new Vue({
    // vue底层默认采用vue.runtime.esm.js仅运行时版本
    // 目的是减小体积，vue.js包含：vue核心 + vue模板编译器（模板编译器可能占用vue.js体积的三分之一，影响运行性能）
    render: h => h(App),
    // Vue启动时，render函数会被自动调用
    // createElement函数可以用来创建元素
    /* render(createElement) {
        console.log(createElement);
        return createElement(App);
    }, */
}).$mount('#app')
