<template>
  <div>
    {{user.age}}
  </div>
  <h1>{{user.msg.info}}</h1>
  <button @click="changeInfo">修改</button>
</template>


<script setup>
import {reactive, ref, toRef, toRefs} from "vue";

const user = reactive({
  name: 'zs',
  age: 18,
  msg: {
    info: '黑马'
  }
})
const info = toRef(user.msg, 'info')
// console.log(msg)

const changeInfo = () => {
  info.value = '传智'
}
// console.log(name)
</script>

<style>
/*样式*/
</style>
