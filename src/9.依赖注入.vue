<template>
  <Child1></Child1>
</template>


<script setup>
import Child1 from './components/Child1.vue'
import {provide, ref} from "vue";

const count = ref(100)
// 父组件提供一个修改数据的方法
const changeCount = (num) => {
  count.value = num
}
// 使用provide提供数据
provide('count', count)
provide('changeCount', changeCount)
</script>

<style>
/*样式*/
</style>
