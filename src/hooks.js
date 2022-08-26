import {onMounted, onUnmounted, reactive, ref} from "vue";

export function useMouse() {
  const mouse = reactive({x: 0, y: 0})
  const move = e => {
    mouse.x = e.pageX;
    mouse.y = e.pageY
  }
  onMounted(() => {
    document.addEventListener('mousemove', move)
  })
  // 组件卸载的时候，移除事件
  onUnmounted(() => {
    document.removeEventListener('mousemove', move)
  })
  return mouse
}


export function useCount() {
  const count = ref(0)
  const add = () => count.value ++
  return {
    count,
    add
  }
}
