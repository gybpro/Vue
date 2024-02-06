<template>
    <div class="s">
        <h1>{{ msg }}</h1>
        <User></User>
        <Vip></Vip>
    </div>
</template>

<script>
import User from './User.vue';
import Vip from "./Vip.vue";

export default {
    name: 'App',
    data() {
        return {
            msg: "plugins插件",
        }
    },
    created() {
        // 访问插件中为Vue原型对象扩展的属性
        console.log(this.counter);
        console.log(this.__proto__.counter);
    },
    components: { User, Vip },
}
</script>

<!-- 一般App根组件中的style使用全局样式，子组件采用scope局部样式 -->
<style>
.s {
    background-color: pink;
}
</style>
