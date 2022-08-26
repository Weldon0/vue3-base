<template>
  <div></div>
</template>


<script setup>
// onBeforeMount 组件挂载之前执行
// onMounted 组件挂载之后执行
// onBeforeUpdate 组件更新之前执行
// onUpdated 组件更新之后执行
// onBeforeUnmount 组件卸载之前执行
// onUnmounted 组件卸载之后执行
import {onBeforeMount, onMounted, onUpdated, onBeforeUpdate, onUnmounted, onBeforeUnmount} from 'vue'
// js
console.log('created beforeCreate')

onMounted(() => {
  console.log('组件挂载完毕')
})

onUpdated(() => {
  console.log('数据更新完毕')
})

onUnmounted(() => {
  console.log('组件卸载')
})
</script>

<style>
/*样式*/
</style>
