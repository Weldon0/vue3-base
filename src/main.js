// vite解析的时候，会先到main.js
// 搭建vue的主入口

// 使用到createApp
import {createApp} from "vue";

// 引入app.vue组件
import App from './11.toRefs.vue'

// 创建vue的主应用
const app = createApp(App)

// 指定挂载的节点
app.mount('#app')


// new Vue({
//   el: '',
//   render: h => h(App),
// })

