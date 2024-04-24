<template>
    <div>
        <h1>B组件</h1>
        <button @click="doB1">doB1 BUTTON</button>
        <button @click="doB2">doB2 BUTTON</button>
        <h3>state : {{ b }}</h3>
        <h3>getters : {{ computedB }}</h3>
        <button @click="search">查看天气</button>
        <h3>{{ cityName }} : {{ cityTemp }}</h3>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    name: 'ModuleBName',
    computed: {
        ...mapState('bModule', [ 'b', 'cityName', "cityTemp" ]),
        ...mapGetters('bModule', [ 'computedB' ])
    },
    methods: {
        ...mapActions('bModule', [ 'doB1', 'search' ]),
        ...mapMutations('bModule', [ 'doB2' ])
    },
}
</script>
