<template>
  <div>{{ count }}</div>
  <div>
    <hr>
    x:{{ mouse.x }}
    y: {{ mouse.y }}
  </div>
  <button @click="add">新增</button>
</template>

<script setup>
// 写在setup语法糖里面的所有变量，模板可以直接使用
// 需要在script上声明setup属性，才可以使用setup语法糖
// import {useCount, useMouse} from "./hooks.js";

import {useCount, useMouse} from './hooks';

const {count, add} = useCount()
const mouse = useMouse()
</script>
