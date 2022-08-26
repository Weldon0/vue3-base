<template name="toRefs">
  <div>
    {{ user.count }}
    <button @click="add">count自增</button>
  </div>
</template>


<script setup>
import {reactive, toRefs, toRef} from "vue";

defineOptions({})

const user = reactive({
  count: 0
})

// 如果你把响应式数据进行结构的时候，会丢失响应式特性
// 如果说想要让解构之后的数据依旧保持响应式，需要用到toRefs
// 结构出来的数据要使用value去赋值
// let {count} = toRefs(user);
// toRef
const count = toRef(user, 'count')
// let {count, name} = toRefs(user);

const add = () => {
  count.value++;
}
</script>

<style>
/*样式*/
</style>
