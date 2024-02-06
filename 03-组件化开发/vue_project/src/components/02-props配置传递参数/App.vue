<template>
    <div>
        <h1>{{ msg }}</h1>
        <div v-for="(car, index) of cars" :key="index">
            <Car :car="car.brand" :price="car.price" :ref="'car' + index"></Car>
            <hr>
        </div>
        <button @click="printCarInfo">获取汽车信息</button>
        <h2 ref="hh"></h2>
    </div>
</template>

<script>
import Car from './Car.vue'
export default {
    name: 'App',
    data() {
        return {
            msg: '汽车信息',
            cars: [
                { brand: '比亚迪', price: 40 },
                { brand: '五菱', price: 10 },
                { brand: '红旗', price: 80 },
            ],
        }
    },
    methods: {
        printCarInfo() {
            // 通过$refs获取子组件
            this.cars.forEach((car, index) => {
                let carInfo = this.$refs['car' + index];
                 console.log("第" + (index + 1) + "辆车信息：", "品牌（" + carInfo[0].brand + ")、价格（" + 
                 carInfo[0].price + "万）、颜色（" + carInfo[0].color + "）");
            });
           
            // 不是子组件不能获取
            // console.log(this.$refs.hh);
        }
    },
    components: { Car },
}
</script>

<style scoped></style>