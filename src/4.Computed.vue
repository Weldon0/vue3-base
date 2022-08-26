<template>
  <div>
    <h1>{{ fullName }}</h1>
    <input v-model="names.firstName" type="text" placeholder="firstName">
    <input type="text" v-model="names.lastName" placeholder="lastName">
  </div>
</template>

<script setup>
import {computed, reactive} from "vue";

// 使用计算属性自动计算出fullName
// 第一种书写形式：直接传入一个函数，当函数内部依赖项发生变化的时候，会自动计算结果
const fullName = computed(() => {
  return names.firstName + '--' + names.lastName
})

const names = reactive({
  firstName: '',
  lastName: ''
})
</script>

<style scoped>

</style>
