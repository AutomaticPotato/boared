<script lang="ts" setup>
import { useEventListener } from '@vueuse/core';
import { computed, ref } from 'vue';


const checked = defineModel()

const switchButtonLocation = computed(() => ({
    "left-0 animate-move origin-right bg-slate-300": !checked.value,
    "left-1/2 animate-move origin-left bg-emerald-500": checked.value
}))

const switchRef = ref<HTMLElement | null>(null)

useEventListener(switchRef, 'animationend', () => {
    switchRef.value?.classList.remove('animate-move')
})
</script>

<template>
    <div class="flex items-center">
        <slot />
        <div @click="checked = !checked"
            class="h-5 w-10 outline outline-slate-300 outline-offset-2 outline-2 rounded-full relative cursor-pointer m-3">
            <div ref="switchRef" class="h-5 w-5  rounded-full absolute transition-all duration-300 ease-out"
                :class="switchButtonLocation">
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-move {
    animation: grow-shrink-horizontal 300ms linear;
}

@keyframes grow-shrink-horizontal {
    0% {
        /* transform: scale(1, 1); */
        height: 1.25rem;
        width: 1.25rem;
    }

    50% {
        /* transform: scale(1.5, 1); */
        width: 2.5rem;
    }

    100% {
        /* transform: scale(1, 1); */
        width: 1.25rem;
    }
}
</style>