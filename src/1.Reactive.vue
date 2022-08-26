<template>
  <div>{{obj.name}}</div>
  <button @click="say">说话</button>
</template>

<script>
import {reactive} from "vue";

export default {
  setup() {
    console.log('setup')
    // 如果数据不需要响应式更新，直接定义即可
    // reactive包裹的对象才是响应式的
    // 当前的数据使用proxy进行代理
    // 只能劫持对象
    // new Proxy({name: '黑马'}, )
    const obj = reactive({
      name: '黑马',
    })
    const say = () => {
      obj.name = '传智'
    }
    return {
      obj,
      say
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  }
}
</script>
