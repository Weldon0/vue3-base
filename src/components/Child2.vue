<template>
  <div>child2</div>
  <hr>
  <h2>{{ count }}</h2>
  <hr>
  <button @click="changeNum">修改爷爷的count</button>
</template>

<script setup>
import {inject} from 'vue'
// 使用inject注入数据
const count = inject('count')
// 接受父组件提供的changeCount方法
const changeCount = inject('changeCount')
const changeNum = () => {
  // 按钮点击的时候触发父组件的提供的changeCount方法，修改数据
  changeCount(666)
}
</script>

<style scoped>

</style>
