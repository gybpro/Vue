<template>
    <div>
        <ModuleA />
        <hr>
        <ModuleB />
    </div>
</template>

<script>
import ModuleA from './ModuleA.vue'
import ModuleB from './ModuleB.vue'

export default {
    name: 'App',
    components: { ModuleA, ModuleB }
}
</script>
