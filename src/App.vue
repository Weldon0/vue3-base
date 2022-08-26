<template>
  <div class="box">{{ count }}</div>
  <div>
    <div>
      x：{{ mouse.x }}
      y: {{ mouse.y }}
    </div>
  </div>
  <button @click="add">自增</button>
</template>

<script>
import {useMouse, useCount} from "./hooks.js";

export default {
  setup() {
    const mouse = useMouse()
    const {count, add} = useCount()
    return {
      count,
      add,
      mouse
    }
  }
}
</script>

<style>
.box {
  width: 100%;
  height: 100%;
  background-color: #f00;
}
</style>
