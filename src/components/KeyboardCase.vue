<script setup lang="ts">
import type { KeyboardKey as KeyboardKeyType } from '@/types/KeyboardKey';
import KeyboardKey from "@/components/KeyboardKey.vue";
import { useMagicKeys } from "@vueuse/core"
import { usePressedKeys } from '@/composables/usePressedKey';


defineProps<{
  keyboardLayout: KeyboardKeyType[]
}>()

const { clearKeyFromSet, shouldLightUp } = usePressedKeys()
const { shift } = useMagicKeys()



</script>

<template>
  <div class="flex max-w-6xl gap-3 justify-between flex-wrap">
    <KeyboardKey @animationFinished="clearKeyFromSet" v-for="(key, index) in keyboardLayout"
      :key="key.primarySymbol + index" :shift :keyboardKey="key" :lightUp="shouldLightUp(key)" />
  </div>
</template>
