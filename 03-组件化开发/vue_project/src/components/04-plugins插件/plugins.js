// 每一个插件都是一个对象
export const p1 = {
    // 每一个插件对象中必须有一个install方法
    // 这个install方法会被自动调用
    // install方法上的参数：包括两部分
    // 第一部分：Vue构造函数
    // 第二部分：可以接收用户再使用这个插件时传过来的数据，参数个数不限
    install(Vue, a, b, c, d) {
        console.log(Vue);
        console.log("hhhhh", a, b, c, d);
        // 可以在插件中做一些事情，如扩展Vue原型对象的属性
        Vue.prototype.counter = 100;
    }
}