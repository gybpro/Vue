<template>
    <div>
        <h1>App组件</h1>
        <!-- 使用组件 -->
        <X></X>
        <Y></Y>
    </div>
</template>

<script>
    import X from './X.vue'
    import Y from './Y.vue'
    // 组件导出有三种方式：分别导出、默认导出、按需导出
    // 这里使用默认导出，也是最常用的导出方式
    export default {
        // 注册组件
        components : {X, Y}
    }
</script>
