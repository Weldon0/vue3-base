<template>
  <div>
    <input type="text" v-model="count">
    <input type="text" v-model="num">
    <input type="text" v-model="user.age">
  </div>
</template>


<script setup>

import {ref, watch} from "vue";

const count = ref(0)
const num = ref(0)
const user = ref({
  userName: '黑马',
  age: 20
})

/**
 * onTrack 将在响应属性或引用作为依赖项被跟踪时被调用。
 * onTrigger 将在侦听器回调被依赖项的变更触发时被调用。
 */
// 监听单个属性
watch(count, (newValue, oldValue, onCleanup) => {
  // onCleanup
  // 清楚副作用
  // onCleanUp函数
  console.log('watch触发');
  const timer = setTimeout(() => {
    console.log('发起请求')
  }, 1000);
  // onCleanUp的回调函数什么时候执行的？
  // 下一次watch触发的时候，会把上一次触发watch的onCleanUp回调执行一下
  onCleanup(() => {
    console.log('cleanUp函数执行');
    clearTimeout(timer);
  })
}, {
  // immediate: true, // 首次执行
  deep: true,
  // 用于调试的，数据变化的时候，或者回调执行的时候
  // onTrack(e) {
  //   debugger
  // },
  // onTrigger(e) {
  //   debugger
  // }
})

// 监听多个属性
/**
 * @type {WatchStopHandle} 返回的函数可以注销当前侦听器
 */
const watchStopHandle = watch([count, num], ([newCount, newNum], [oldCount, oldNum]) => {
  // console.log('count')
  // console.log(oldCount);
  // console.log(newCount);
  // console.log('num')
  // console.log(oldNum)
  // console.log(newNum);
}, {
  deep: true,
  immediate: true
})

watchStopHandle()


// 监听对象的单个属性
watch(
    () => {
      return user.value.age
    },
    (newValue) => {
      // console.log('age变化了')
      // console.log(newValue)
    }
)
</script>

<style>
/*样式*/
</style>
