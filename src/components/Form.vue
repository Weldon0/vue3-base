<template>
  <div>form</div>
</template>


<script setup>
// js
const validator = () => {
  console.log('表单校验')
}
// 子组件主动暴露方法
defineExpose({
  validator
})
</script>

<style>
/*样式*/
</style>
