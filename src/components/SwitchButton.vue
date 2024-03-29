<script lang="ts" setup>
import { useEventListener } from '@vueuse/core';
import { computed, ref } from 'vue';


const checked = defineModel()

const switchButtonLocation = computed(() => ({
    "move-left origin-right bg-slate-300": !checked.value,
    "move-right origin-left bg-emerald-500": checked.value
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
.move-right {
    animation: move-right 300ms ease-out forwards;
}

.move-left {
    animation: move-left 300ms ease-out forwards;
}

@keyframes move-right {
    0% {
        left: 0;
        height: 1.25rem;
        width: 1.25rem;
    }

    50% {
        width: 100%;
        left: 0;
    }

    100% {
        left: 50%;
    }
}

@keyframes move-left {
    0% {
        left: 50%;
    }

    50% {
        width: 100%;
        left: 0;
    }

    100% {
        left: 0;
        height: 1.25rem;
        width: 1.25rem;
    }
}
</style>