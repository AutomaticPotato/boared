<script setup lang="ts">
import KeyboardCase from '@/components/KeyboardCase.vue';
import { defaultLayout } from "@/constants/layouts/defaultLayout"
import KeySpawner from "@/components/KeySpawner.vue"
import { useEventListener } from '@vueuse/core';
import { usePressedKeys } from '@/composables/usePressedKey';
import { useTone } from './composables/useTone';
import { useOptions } from './composables/useOptions';
import OptionsBar from './components/OptionsBar.vue';
import SideBar from './components/SideBar.vue';

const keys = defaultLayout
const { pressedKeys } = usePressedKeys()
const { playNote } = useTone()
const { playSound, flyingKeys } = useOptions()

useEventListener(window, 'keydown', (e: KeyboardEvent) => {
  pressedKeys.value.add(e.key.toLocaleLowerCase())
  const keyIndex = defaultLayout.findIndex(key => key.primarySymbol === e.key.toLocaleLowerCase())
  if (playSound.value) playNote((50 + Math.abs(keyIndex)) * 5)
})
</script>

<template>
  <div class="flex flex-col items-center p-5">
    <OptionsBar />
    <SideBar />
    <KeyboardCase :keyboard-layout="keys" />
    <KeySpawner v-if="flyingKeys" :keyboard-layout="keys" />
  </div>
</template>
