<template>
    <div class="card">
        <Search/>
        <Weather/>
    </div>
</template>

<script>
import Search from './Search.vue'
import Weather from './Weather.vue'

export default {
    name: 'App',
    components: { Search, Weather }
}
</script>

<style lang="css">
/*公共样式*/
* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}

body {
    background: #222;
}

.card {
    width: 70%;
    max-width: 470px;
    background: linear-gradient(135deg, #00feba, #5b548a);
    color: #fff;
    margin: 100px auto 0;
    border-radius: 20px;
    padding: 40px 35px;
    text-align: center;
}
</style>
