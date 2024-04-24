import axios from "axios"

export default {
    namespaced: true,
    actions: {
        doB1() {
            console.log('doB1 action...')
        },
        search(context) {
            let cityName = 'Beijing'
            // 发送AJAX请求，根据城市的名字获取纬度和经度
            const apiKey = "78b262ed7919f0d79a2ca50a4a6f82bf"
            // 使用ES6的模板语法进行字符串的拼接。
            const apiUrlGetLatAndLon = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
            axios.get(apiUrlGetLatAndLon).then(res => {
                console.log('响应数据：', res.data)
                // 获取纬度和经度
                const lat = res.data[0].lat
                console.log('纬度', lat)
                const lon = res.data[0].lon
                console.log('经度', lon)
                // 再发送一次AJAX请求，调用接口，根据纬度和经度获取天气信息
                const apiUrlGetWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
                axios.get(apiUrlGetWeather).then(res => {
                    console.log('响应数据：', res.data)
                    context.commit('SEARCH', res.data)
                })
            })
        }
    },
    mutations: {
        doB2() {
            console.log('doB2 mutation...')
        },
        SEARCH(state, value) {
            state.cityName = value.name
            state.cityTemp = value.main.temp
        }
    },
    state: {
        b: 2,
        cityName: '城市',
        cityTemp: '温度',
    },
    getters: {
        computedB() {
            return 2
        }
    }
}
