<template>
    <div>
        <Subscriber/>
        <Publisher/>
    </div>
</template>

<script>
import Subscriber from './Subscriber.vue'
import Publisher from './Publisher.vue'

export default {
    name: 'App',
    components: { Subscriber, Publisher }
}
</script>
