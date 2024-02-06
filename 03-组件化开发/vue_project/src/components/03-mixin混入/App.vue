<template>
    <div>
        <User></User>
        <Vip></Vip>
    </div>
</template>

<script>
import User from './User.vue'
import Vip from './Vip.vue'
export default {
    name: 'App',
    components: { User, Vip }
}
</script>
