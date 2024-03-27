<script lang="ts" setup>
import { usePressedKeys } from '@/composables/usePressedKey';
import KeyboardKey from './KeyboardKey.vue';
import { type KeyboardKey as KeyboardKeyType } from '@/types/KeyboardKey';

defineProps<{
    keyboardLayout: KeyboardKeyType[]
}>()
const { shouldLightUp } = usePressedKeys()

function randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
</script>

<template>
    <div class="w-full fixed bottom-0">
        <template v-for="(key, index) in keyboardLayout" :key="key.primarySymbol + index">
            <Transition enterActiveClass="transition-all duration-500 opacity-100 ease-out"
                enterFromClass="translate-y-0 opacity-0" enterToClass="-translate-y-96 opacity-0">
                <KeyboardKey v-if="shouldLightUp(key)" :keyboardKey="key" class="max-w-2xl absolute drop-shadow-md"
                    :style="{ left: randomBetween(0, 100) + '%' }" />
            </Transition>
        </template>
    </div>
</template>
