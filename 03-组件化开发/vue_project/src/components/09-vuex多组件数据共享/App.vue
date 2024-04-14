<template>
    <div>
        <User/>
        <hr>
        <Vip/>
        <hr>
        <Name/>
    </div>
</template>

<script>
import User from './User.vue'
import Vip from './Vip.vue'
import Name from './Reversed.vue'

export default {
    name: 'App',
    components: { User, Vip, Name }
}
</script>
