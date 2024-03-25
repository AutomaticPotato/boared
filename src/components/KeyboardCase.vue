<script setup lang="ts">
import type { KeyboardKey as KeyboardKeyType } from '@/types/KeyboardKey';
import KeyboardKey from "@/components/KeyboardKey.vue";
import { useEventListener } from "@vueuse/core"
import { ref } from 'vue';

defineProps<{
  keyboardKeys: KeyboardKeyType[]
}>()

const pressedKeys = ref(new Set<string>())

function shouldLightUp(key: KeyboardKeyType) {
  if (pressedKeys.value.has(key.primarySymbol.toLocaleLowerCase())) return true
  else if (key.secondarySymbol && pressedKeys.value.has(key.secondarySymbol.toLocaleLowerCase())) return true
  else if (key.name && pressedKeys.value.has(key.name.toLocaleLowerCase())) return true
  return false
}

function clearKeyFromSet(key: KeyboardKeyType) {
  pressedKeys.value.delete(key.primarySymbol.toLocaleLowerCase())
  if (key.secondarySymbol) pressedKeys.value.delete(key.secondarySymbol.toLocaleLowerCase())
  if (key.name) pressedKeys.value.delete(key.name.toLocaleLowerCase())
}

useEventListener(window, 'keydown', (e: KeyboardEvent) => {
  pressedKeys.value.add(e.key.toLocaleLowerCase())
})


</script>

<template>
  <div class="flex max-w-6xl gap-3 justify-between flex-wrap">
    <KeyboardKey @animationFinished="clearKeyFromSet" v-for="(key, index) in keyboardKeys"
      :key="key.primarySymbol + index" :keyboardKey="key" :lightUp="shouldLightUp(key)" />
  </div>
</template>
