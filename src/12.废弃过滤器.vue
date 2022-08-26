<template>
  <div>
    {{ formatDate(date) }}
  </div>
</template>

<script setup>
defineOptions({
  name: 'Filter'
})
// vue3过滤器被废弃了
import dayjs from 'dayjs'

const date = new Date()

// 可以使用函数模拟过滤器函数
const formatDate = (value) => {
  return dayjs(value).format('YYYY年MM月DD HH时mm分ss秒')
}

</script>

<style scoped>

</style>
