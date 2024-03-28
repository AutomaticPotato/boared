<script setup lang="ts">
import { useOptions } from '@/composables/useOptions';
import { KeyboardKeyUnits } from '@/enums/KeyboardKeyUnits';
import type { KeyboardKey } from '@/types/KeyboardKey';
import { useEventListener } from '@vueuse/core';
import { computed, ref } from 'vue';

const props = withDefaults(defineProps<{
    keyboardKey: KeyboardKey
    lightUp?: boolean,
    shift?: boolean
}>(), {
    lightUp: false,
    shift: false
})


const emit = defineEmits<{
    animationFinished: [key: KeyboardKey]
}>()

const keyStyles = computed(() => ({
    "h-16 w-16": props.keyboardKey.unit === KeyboardKeyUnits.OneUnit,
    "h-16 w-20": props.keyboardKey.unit === KeyboardKeyUnits.OneAndQuarterUnits,
    "h-16 w-24": props.keyboardKey.unit === KeyboardKeyUnits.OneAndHalfUnits,
    "h-16 w-28": props.keyboardKey.unit === KeyboardKeyUnits.OneAndThreeQuartersUnits,
    "h-16 w-32": props.keyboardKey.unit === KeyboardKeyUnits.TwoUnits,
    "h-16 w-36": props.keyboardKey.unit === KeyboardKeyUnits.TwoAndQuarterUnits,
    "h-16 w-44": props.keyboardKey.unit === KeyboardKeyUnits.TwoAndThreeQuarterUnits,
    "h-16 grow min-w-96": props.keyboardKey.unit === KeyboardKeyUnits.SixAndQuarterUnits,
    "outlineAnimation": props.lightUp && !stickyKeys.value,
    "border-slate-500": stickyKeys.value && props.lightUp
}))

const keyReference = ref<HTMLElement | null>(null)
const { stickyKeys } = useOptions()

useEventListener(keyReference, 'animationend', () => {
    keyReference.value?.classList.remove('outlineAnimation')
    emit('animationFinished', props.keyboardKey)
})

</script>

<template>
    <div ref="keyReference"
        class="flex flex-col border-4 border-slate-300 rounded-md justify-center items-center text-xl bg-white"
        :class="keyStyles">
        <span v-if="!shift">{{ keyboardKey.primarySymbol }}</span>
        <span v-else>{{ keyboardKey.secondarySymbol ?? keyboardKey.primarySymbol }}</span>
    </div>
</template>

<style scoped>
@keyframes keyOutlineAnimation {
    0% {
        outline: 0px solid theme("colors.slate.300/80");
    }

    20% {
        outline: 5px solid theme("colors.slate.500/80");
    }

    100% {
        outline: 5px solid theme("colors.slate.300/0");
    }
}

.outlineAnimation {
    animation-name: keyOutlineAnimation;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
}
</style>