<template>
    <div>
        <h1>App组件</h1>
        <!-- 使用组件 -->
        <SingleX></SingleX>
        <SingleY></SingleY>
        <h2>render函数</h2>
    </div>
</template>

<script>
    import SingleX from './SingleX.vue'
    import SingleY from './SingleY.vue'
    export default {
        // 注册组件
        components : {SingleX, SingleY}
    }
</script>
