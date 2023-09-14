// 定义一个Vue类
class Vue {
    // 定义构造函数
    // options是一个简单纯粹的JS对象：{}
    // options对象中有一个data配置项
    constructor(options) {

        // 获取所有属性名
        Object.keys(options.data).forEach((propertyName, index) => {
            // console.log(typeof propertyName, propertyName, index);
            // 首字母为_和$则不代理
            let firstChar = propertyName.charAt(0);
            if (!(firstChar === '_' || firstChar === '$')) {
                Object.defineProperty(this, propertyName, {
                    get() {
                        return options.data[propertyName];
                    },
                    set(val) {
                        options.data[propertyName] = val;
                    }
                });
            }
        });

        if (options.el.substring(0, 1) === '#') {
            // 获取元素
            const element = document.getElementById(options.el.substring(1));

            // 把options.data对象中的数据渲染到element中
            // let name = element.outerText.match(/{{(\S*)}}/)[1];
            // element.innerHTML = element.outerHTML.match(/(\S*){{/)[1] + options.data[name] + element.outerHTML.match(/}}(\S*)/)[1];

            let nameArr = element.outerHTML.match(/(?<={{).*?(?=}})/g);
            console.log(nameArr);
            let htmlBody = element.outerHTML.match(/(?<=}})(.*?)(?={{)|(?<=}})(.*?)|(.*?)(?={{)/g);
            htmlBody = htmlBody.filter(item => item !== "");
            console.log(htmlBody);
            let htmlArr = [];
            htmlBody.forEach((item, index) => {
                htmlArr.push(item);
                htmlArr.push(options.data[nameArr[index]]);
            });
            let htmlStr = htmlArr.join("");
            element.innerHTML = htmlStr;
        }

    }
}