<template>
    <div class="s">
        <h1>{{ msg }}</h1>
        <!--
            事件实现的四要素：
                1.事件源（自定义事件的事件源必须是组件）
                2.为事件源绑定事件
                3.编写回调函数
                4.触发事件（事件触发自动调用回调函数）
            对于自定义事件，触发事件需要自己编写一段代码触发事件，触发事件的代码写在事件源组件中
            自定义组件也可使用如.once等事件修饰符
            在自定义事件中，子组件可以通过触发事件向父组件传递数据
            组件间通信的方式：
            1.父向子传递数据：props
            2.子向父传递数据：
                a.父向子传递一个函数，子通过调用接收的函数向父传递数据（不推荐）
                b.组件的自定义事件（推荐）：
                    父绑定事件：负责接收数据
                    子触发事件：负责发送数据
            3.同级或多级传递数据：全局事件总线
         -->
        <h3>内置事件</h3>
        <button @click="hello">hello</button>
        <hr>
        <h3>自定义事件</h3>
        <User @event1.once="doSome" @event2.once="doOther"></User>
        <User @event1="doSome" @event2="doOther"></User>
        <!-- ref属性，为子组件注册一个引用，值为引用的变量名，以数组元素的形式存储在父组件的$refs属性中 -->
        <User ref="user"></User>
        <Vip/>
    </div>
</template>

<script>
import User from '@/components/05-组件自定义事件/User.vue';
import Vip from "@/components/05-组件自定义事件/Vip.vue";

export default {
    name: 'App',
    data() {
        return {
            msg: "组件自定义事件",
        }
    },
    methods: {
        hello() {
            console.log('hello world!');
        },
        // ...params是可变长参数，底层是数组
        doSome(...params) {
            console.log(...params);
        },
        doOther() {
            console.log('do other!');
        }
    },
    mounted() {
        // 为子组件对象绑定事件
        // this.$refs.user.$on('event1', this.doSome);
        this.$refs.user.$once('event1', this.doSome);
        this.$refs.user.$on('event2', this.doOther);
        this.$refs.user.$on('event2', function () {
            console.log('function：', this);
        });
        // 箭头函数中的this指向外层，及调用mounted的对象（父组件）
        this.$refs.user.$on('event2', () => {
            console.log('箭头函数：', this);
        });
        this.$bus.$on('eventBus', this.doSome);
    },
    components: { Vip, User },
}

// test 查找组合方案
window.onload = function () {
    let result = findCombinations(20, 1);

    console.log(result.length);

    result.forEach(item => {
        console.log(item);
    });
}

/**
 * 查找组合方案的入口方法
 *
 * @param {number} total 总数
 * @param {number} min   元素最小值
 * @returns {Array<Array<number>>} 组合方案集合
 */
function findCombinations(total, min) {
    let result = [];
    findCombinationsHelper(total, min, [], result);
    return result;
}

/**
 * 查找组合方案的递归方法
 *
 * @param {number} remaining 剩余可分元素之和
 * @param {number} min       元素最小值
 * @param {Array<number>} current 当前组合方案
 * @param {Array<Array<number>>} result 结果方案集合
 */
function findCombinationsHelper(remaining, min, current, result) {
    if (remaining === 0) {
        // 如果剩余可分元素之和为0，则找到正确方案，将组合方案添加到结果集合中，然后直接返回
        result.push([...current]);
        return;
    }

    let i = min;
    while (i <= remaining) {
        // 如果元素最小值小于等于剩余可分元素之和，则将元素最小值添加到当前组合方案中，并继续递归
        current.push(i);
        findCombinationsHelper(remaining - i, i + 1, current, result);
        // 上个方案结束，移除最后一个元素，元素最小值+1，并回溯到上一步
        current.pop();
        i++;
    }
    // 如果元素最小值大于剩余可分元素之和，则方案失败，直接返回
}
</script>

<style>
</style>
