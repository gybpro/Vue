<template>
    <div>
        <h1>数字：{{ startNum }}</h1>
        <button @click="plusOne">点我加1</button>
    </div>
</template>

<script>
export default {
    name: 'App',
    computed: {
        startNum() {
            return this.$store.state.num
        }
    },
    methods: {
        plusOne() {
            // (不建议)直接修改state中的数据
            // this.$store.state.num++
            // 调用vuex的API：dispatch分发函数，让action去处理这项任务
            this.$store.dispatch('plusOne', this.startNum)
        }
    },
}
</script>
