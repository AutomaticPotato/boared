import type { KeyboardKey } from '@/types/KeyboardKey'
import { ref } from 'vue'

const pressedKeys = ref(new Set<string>())
const keyHistory = ref<string[]>([])

export function usePressedKeys() {
  function shouldLightUp(key: KeyboardKey) {
    if (pressedKeys.value.has(key.primarySymbol.toLocaleLowerCase())) return true
    else if (key.secondarySymbol && pressedKeys.value.has(key.secondarySymbol.toLocaleLowerCase()))
      return true
    else if (key.name && pressedKeys.value.has(key.name.toLocaleLowerCase())) return true
    return false
  }

  function clearKeyFromSet(key: KeyboardKey) {
    pressedKeys.value.delete(key.primarySymbol.toLocaleLowerCase())
    if (key.secondarySymbol) pressedKeys.value.delete(key.secondarySymbol.toLocaleLowerCase())
    if (key.name) pressedKeys.value.delete(key.name.toLocaleLowerCase())
  }

  return { pressedKeys, shouldLightUp, clearKeyFromSet, keyHistory}
}
