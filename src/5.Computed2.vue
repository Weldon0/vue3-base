<template>
  <div>我今年的年纪 <input type="text" v-model="age" /></div>
  <div>我明年的年龄 {{ nextAge }}</div>
  <div>我后年的年龄 <input type="text" v-model="nextAge2" /></div>
</template>

<script setup>

import {computed, ref} from "vue";

const age = ref(0)
const nextAge = computed(() => {
  return +age.value + 1
})

const nextAge2 = computed({
  get() {
    // 返回计算属性的值
    return +age.value + 2
  },
  set(value) {
    // 给计算属性赋值的时候，就会触发set
    age.value = value - 2
  }
})
</script>
