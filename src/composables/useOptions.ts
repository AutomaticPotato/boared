import { ref } from 'vue'

const playSound = ref(false)
const stickyKeys = ref(false)
const flyingKeys = ref(true)
const showHistory = ref(true)

export function useOptions() {
  return {
    playSound,
    stickyKeys,
    flyingKeys,
    showHistory
  }
}
