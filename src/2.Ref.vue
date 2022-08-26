<template>
  <div>{{ count }}</div>
  <button @click="add">新增</button>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    // 如果处理的是基本值类型，需要使用ref进行包裹
    // ref会自动把传入的数值包裹一个对象
    /**
     * @type {Ref<UnwrapRef<number>>}
     */
    const count = ref(0);
    const add = () => {
      // js里面修改/获取ref的值的时候，要通过value去修改
      // 模板里面使用ref的值的时候，可以直接使用，模板会自动解析出value
      count.value++
    }
    return {
      count,
      add
    }
  }
}
</script>
