// 定义一个Vue类
class Vue {
    // 定义构造函数
    // options是一个简单纯粹的JS对象：{}
    // options对象中有一个data配置项
    constructor(options) {
        this.options = options;
        this.data = options.data;
        this.element = document.querySelector(options.el);
        this.template = this.element.innerHTML;

        // 创建Observer实例来观察数据对象
        this.observer = new Observer(this, this.data);

        this.firstCompile();

        this.compile();

        // 获取所有属性名，改为在Observer观察者中实现
        /* Object.keys(options.data).forEach((propertyName, index) => {
            // console.log(typeof propertyName, propertyName, index);
            // 首字母为_和$则不代理
            let firstChar = propertyName.charAt(0);
            if (!(firstChar === '_' || firstChar === '$')) {
                Object.defineProperty(this, propertyName, {
                    get() {
                        // 返回options的data中的数据
                        return options.data[propertyName];
                    },
                    set(val) {
                        // 修改options的data中的数据
                        options.data[propertyName] = val;
                    }
                });
            }
        }); */

        // 获取所有函数名
        Object.keys(options.methods).forEach((methodName, index) => {
            // console.log(typeof methodName, methodName, index);
            // 为vm对象扩展options的methods中的方法
            this[methodName] = options.methods[methodName];
        });
    }

    firstCompile() {
        this.bindDirective(this.element);
    }

    // 双向绑定之绑定输入事件
    bindDirective(element) {
        let vm = this;
        let directives = element.querySelectorAll('[v-model\\:value]');
        directives.forEach(directive => {
            let key;
            directive.outerHTML = directive.outerHTML.replace(/v-model:value="(.+?)"/g, (match, expression) => {
                key = expression;
                let value = eval('this.data.' + expression);
                value = "oninput=\'eval(\"vm.data.\" + \"" + expression + "\" + \" = value\")\'";
                console.log(value);
                return value !== undefined ? value : '';
            });
        });

        // 正则匹配替换插值语法中的属性值
        this.element.innerHTML = this.element.innerHTML.replace(/\{\{(.+?)\}\}/g, (match, expression) => {
            let value = eval('this.data.' + expression);
            value = value + "<span inter='" + expression + "'><span>"
            return value !== undefined ? value : '';
        });

    }

    // 重新渲染视图
    compile() {
        let directives = this.element.querySelectorAll('[inter]');
        directives.forEach(directive => {
            // 正则匹配替换插值语法中的属性值
            let value = eval('this.data.' + directive.getAttribute('inter'));
            let parentNode = directive.parentNode;
            parentNode.innerHTML = parentNode.innerHTML.replace(parentNode.innerText, (match, expression) => {
                return value !== undefined ? value : '';
            });
        });
    }

    // 刷新数据
    refreshData(key, value) {
        this.data[key] = value;
    }
}

// 数据观察者
class Observer {
    constructor(vm, data) {
        this.vm = vm;
        this.data = data;
        this.watchers = {};

        // 观察数据
        this.observe(data);
    }

    // 观察数据
    observe(data) {
        let vm = this.vm;
        Object.keys(data).forEach(key => {
            let value = data[key];
            // 递归实现深度遍历
            if (typeof value === 'object') {
                this.observe(value);
            }
            // 定义数据响应（getter和setter）
            this.defineReactive(data, key, value);

            // 创建watcher对象
            this.createWatcher(vm, key, () => {
                console.log('数据发生变化', key, data[key]);

                // 重新渲染视图
                vm.compile();
            });
        });
    }

    // 定义数据响应（getter和setter）
    defineReactive(data, key, value) {
        // 首字母为_和$则不代理
        let firstChar = key.charAt(0);
        if (!(firstChar === '_' || firstChar === '$')) {
            // 保留外部函数的上下文对象，传递给内部函数使用
            let that = this;
            Object.defineProperty(data, key, {
                get() {
                    console.log('读取数据', value);
                    return value;
                },
                set(newValue) {
                    console.log('更新数据', newValue);
                    if (newValue !== value) {
                        value = newValue;
                        // 内部函数的this对象已经改变，使用外部函数的上下文对象需要用临时变量保留引用
                        // 通知相关watcher数据变化，实现重新渲染
                        that.notify(key);
                    }
                }
            });
        }
    }

    // 通知相关watcher数据变化，实现重新渲染
    notify(key) {
        console.log('触发更新', key);
        // 在实际的Vue实现中，此处会通知相关的Watcher进行更新

        // 简化的实现：
        if (this.watchers[key]) {
            this.watchers[key].update();
        }
    }

    // 创建Watcher实例
    createWatcher(vm, key, updateCallback) {
        this.watchers[key] = new Watcher(vm, key, updateCallback);
    }
}

// 观察者
class Watcher {
    constructor(vm, key, updateCallback) {
        this.vm = vm;
        this.key = key;
        this.updateCallback = updateCallback;
    }

    update() {
        console.log('执行更新回调');
        // 在实际的Vue实现中，执行更新回调，比如更新DOM或触发组件的重新渲染
        this.updateCallback();
    }
}