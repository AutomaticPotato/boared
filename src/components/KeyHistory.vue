<script setup lang="ts">
import { usePressedKeys } from '@/composables/usePressedKey';
import ResetIcon from './icons/ResetIcon.vue';


const { keyHistory } = usePressedKeys()
const resetHistory = () => {
  keyHistory.value = []
}
</script>

<template>
  <div class="relative w-full max-w-6xl">
    <ResetIcon @reset="resetHistory()" v-if="keyHistory.length > 0" class="absolute top-0 right-0" />
    <span v-for="(key, index) in keyHistory" :key="key + index"> {{ key }}</span>
  </div>
</template>
