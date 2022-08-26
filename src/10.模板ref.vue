<template>
  <div>
    <input type="text" ref="input">
    <button @click="handleFocus">点击按钮的时候input聚焦</button>
    <hr>
    <Form ref="form"/>
  </div>
</template>


<script setup>
import {ref} from "vue";
import Form from './components/Form.vue'

const input = ref()

// 获取form表单组件的实例
const form = ref()

const handleFocus = () => {
  // console.log('实现输入框的聚焦')
  // input.value.focus()

  // 父组件调用子组件的方法，子组件内部必须使用defineExpose主动暴漏出来才可以访问的到
  form.value.validator()
}
// js
</script>

<style>
/*样式*/
</style>
