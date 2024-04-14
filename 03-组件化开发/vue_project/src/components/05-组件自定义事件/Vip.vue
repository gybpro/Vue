<template>
    <div>
        <button @click="triggerEventBus">触发总线事件</button>
    </div>
</template>

<script>
export default {
    name: 'VipName',
    data() {
        return {
            name: '李四',
            age: 22
        }
    },
    methods: {
        triggerEventBus() {
            // 获取共享对象，触发共享对象上的事件
            this.$bus.$emit('eventBus', this.name, this.age);
        },
    }
}
</script>

<style scoped>

</style>
