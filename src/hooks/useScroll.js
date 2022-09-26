import { onMounted, onUnmounted, ref } from 'vue';
import { throttle } from 'underscore'

// 监听windows窗口的滚动
export default function useScroll() {
  const isReachBottom = ref(false)

  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollListenerHandler = () => {
    clientHeight.value = document.documentElement.clientHeight;
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;
  
    if (clientHeight.value + scrollTop.value >= scrollHeight.value-1) {
      isReachBottom.value = true
    }
  }
  
  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler)
  })
  
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler)
  })

  return {isReachBottom, clientHeight, scrollTop, scrollHeight}
}