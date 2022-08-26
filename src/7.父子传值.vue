<template>
  <div>
    <HelloWorld :count="count" :user="user" @changeCount="changeCount"/>
  </div>
</template>


<script setup>
// 使用组件，直接引入，就可以在模板中直接使用
import HelloWorld from './components/HelloWorld.vue';
import {ref} from "vue";

const count = ref(0)
const user = ref({
  userName: '黑马程序员',
})

// 父组件传递自定义事件 给子组件
const changeCount = (num) => {
  count.value = num
}
</script>

<style>
/*样式*/
</style>
