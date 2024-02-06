const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 保存时是否进行语法检查。true表示检查，false表示不检查。默认值是true
    // lintOnSave: false,
    // 配置入口
    pages: {
        index: {
            // entry: 'src/a.js', // page 的入口
            entry: 'src/main.js', // page 的入口
        }
    }
})
