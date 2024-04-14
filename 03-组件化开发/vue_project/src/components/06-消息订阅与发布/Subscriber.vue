<template>
    <div>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name: 'SubscriberName',
    mounted() {
        // 订阅者组件挂载完毕之后，订阅消息
        /* this.pid = pubsub.subscribe('2023年第5期英语周报', function(messageTitle, message){
            // messageTitle消息标题
            // message具体消息（数据）
            console.log('消息标题：', messageTitle)
            console.log('消息具体内容：', message)
            // undefined
            console.log(this)
        }) */

        this.pid = pubsub.subscribe('2023年第5期英语周报', (messageTitle, message) => {
            // messageTitle消息标题
            // message具体消息（数据）
            console.log('消息标题：', messageTitle)
            console.log('消息具体内容：', message)
            // 通过箭头函数来获取vc
            console.log(this)
        })
    },
    beforeDestroy() {
        // 当前组件实例销毁的之前，要取消之前订阅的所有消息。
        pubsub.unsubscribe(this.pid)
    },
}
</script>
