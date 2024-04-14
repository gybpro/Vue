// 引入Vue，因为使用Vuex插件的时候需要Vue
import Vue from 'vue'

// 引入vuex插件
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

// vuex插件的三个核心配置对象：actions对象、mutations对象、state对象
const actions = {
    // context参数：vuex的上下文对象，可以看作store对象的缩小版
    // value参数：传递过来的参数
    plusOne(context, value) {
        // 业务逻辑
        value++
        // 业务逻辑处理完后提交更新数据
        context.commit('PLUS_ONE', value);
    }
}

const mutations = {
    PLUS_ONE(state, value) {
        // 更新数据
        state.num = value
    }
}

const state = {
    // 状态对象（数据对象）
    num: 0
}

// 简写形式
export default new Vuex.Store({ actions, mutations, state })

/* // 创建store对象（这个store对象是vuex插件中的老大，最核心的对象，这个对象store是用来管理actions对象、mutations对象、state对象。）
const store = new Vuex.Store({
    // 业务逻辑对象：存储业务逻辑的回调函数
    actions : actions,
    // 数据更新对象：存储更新数据的回调函数
    mutations : mutations,
    // 状态对象：存储共享数据
    state : state
})

// 导出store对象（暴露之后，别人想用可以使用import进行引入）
export default store */
