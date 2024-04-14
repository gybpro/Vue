import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    /* saveUser(context, value){
        context.commit('SAVE_USER', value)
    },
    saveVip(context, value){
        context.commit('SAVE_VIP', value)
    } */
}
const mutations = {
    SAVE_USER(state, value){
        state.users.unshift(value)
    },
    SAVE_VIP(state, value){
        state.vips.unshift(value)
    }
}
const state = {
    // state可以看做Vue中的data
    uname : '',
    users : [
        {id:'001', name:'孙悟空'},
        {id:'002', name:'猪八戒'},
        {id:'003', name:'沙和尚'}
    ],
    vips : [
        {id:'001', name:'高启强'},
        {id:'002', name:'高启盛'},
        {id:'003', name:'张三'}
    ]
}

// getters配置项
const getters = {
    // getter可以看做Vue中的计算属性
    // getter方法会自动接收state对象
    reversedName(state){
        return state.uname.split('').reverse().join('')
    }
}

// 注意将getter给store
export default new Vuex.Store({actions, mutations, state, getters})
