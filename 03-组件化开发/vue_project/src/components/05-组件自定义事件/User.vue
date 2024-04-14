<template>
    <div class="s">
        <button @click="triggerEvent1">触发事件1</button>
        <button @click="triggerEvent2">触发事件2</button>
        <button @click="unbindEvent">解绑事件</button>
    </div>
</template>

<script>
export default {
    name: 'UserName',
    data() {
        return {
            name: '张三',
            age: 20
        }
    },
    methods: {
        triggerEvent1() {
            // this是vc当前组件对象
            // $emit触发自定义事件，第一个参数是事件名称，后面的参数是传递给父组件的数据
            this.$emit('event1', this.name, this.age);
        },
        triggerEvent2() {
            this.$emit('event2');
        },
        triggerEventBus() {
            this.$emit('eventX');
        },
        unbindEvent() {
            // $off()解绑事件，传入单个参数解绑单个事件，传入数组解绑多个事件，不传参数解绑所有事件
            // this.$off('event1');
            // this.$emit('event2');
            // this.$off(['event1', 'event2']);
            this.$off();
            // 也可以通过销毁组件来解绑事件
            // this.$destroy();
        }
    }
}
</script>

<style scoped>
</style>
