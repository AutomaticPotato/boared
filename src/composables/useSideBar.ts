import { ref } from 'vue'

const sideBarOpen = ref(false)

export function useSideBar() {
  return {
    sideBarOpen
  }
}
