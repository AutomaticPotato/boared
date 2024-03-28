import { ref } from 'vue'

const playSound = ref(false)
const stickyKeys = ref(false)
export function useOptions() {
  return {
    playSound,
    stickyKeys
  }
}
