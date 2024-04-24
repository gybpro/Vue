export default {
    namespaced: true,
    actions: {
        doA1() {
            console.log('doA1 action...')
        }
    },
    mutations: {
        doA2() {
            console.log('doA2 mutation...')
        }
    },
    state: {
        a: 2
    },
    getters: {
        computedA() {
            return 2
        }
    }
}
