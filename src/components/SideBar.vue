<script lang="ts" setup>
import { useOptions } from '@/composables/useOptions';
import { useSideBar } from '@/composables/useSideBar';
import SwitchButton from '@/components/SwitchButton.vue';
import { computed } from 'vue';
import ResetIcon from '@/components/icons/ResetIcon.vue';
import CloseIcon from '@/components/icons/CloseIcon.vue';
import { usePressedKeys } from '@/composables/usePressedKey';

const { pressedKeys } = usePressedKeys()
const { sideBarOpen } = useSideBar();
const { playSound, stickyKeys, flyingKeys, showHistory } = useOptions()

const sideBarClassState = computed(() => ({
    "translate-x-0": sideBarOpen.value,
    "translate-x-full": !sideBarOpen.value,
}))

const resetKeyboard = () => {
    pressedKeys.value.clear()
}
</script>

<template>
    <div class="fixed right-0 top-0 h-full  bg-white shadow-lg z-50 transition-all duration-300 ease-out flex flex-col  p-5"
        :class="sideBarClassState">
        <CloseIcon class="self-end mb-3 cursor-pointer" @click="sideBarOpen = false" />
        <SwitchButton v-model="playSound"> Play sound </SwitchButton>
        <SwitchButton v-model="flyingKeys"> Flying keys </SwitchButton>
        <SwitchButton v-model="showHistory"> Key History </SwitchButton>
        <SwitchButton v-model="stickyKeys"> Sticky keys </SwitchButton>
        <Transition class="transition-all duration-300 ease-out" enter-from-class="scale-0" enter-to-class="scale-100"
            leave-to-class="scale-0">
            <ResetIcon @reset="resetKeyboard()" v-if="stickyKeys" class="flex gap-2 items-center" />
        </Transition>

    </div>
</template>