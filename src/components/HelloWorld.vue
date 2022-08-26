<template>
  <div>
    <h1>
      count: {{ count }}
    </h1>
    <h2>
      userName: {{ user.userName }}
    </h2>

    <button @click="showProps">显示props</button>
    <button @click="changeNum">点击修改num</button>
  </div>
</template>


<script setup>
// js
// 接受父组件传递过来的props数据
// defineProps 和 defineEmits不需要导入，直接使用
const props = defineProps({
  count: Number,
  user: Object
})
// 模板里面使用props传递过来的数据，必须接收defineProps的返回值
// console.log(count)

// 子组件接受自定义事件
const emit = defineEmits(['changeCount'])
const changeNum = () => {
  // 通过emit触发自定义事件
  emit('changeCount', 100)
}

const showProps = () => {
  console.log(props)
}
</script>

<style>
/*样式*/
</style>
