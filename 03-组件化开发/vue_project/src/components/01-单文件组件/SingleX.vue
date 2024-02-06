<template>
    <div>
        <h2>X组件</h2>
        <!-- 使用组件 -->
        <SingleX1></SingleX1>
    </div>
</template>

<script>
    import SingleX1 from './SingleX1.vue'
    export default {
        // 注册组件
        components : {SingleX1}
    }
</script>