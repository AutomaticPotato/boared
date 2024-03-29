<script lang="ts" setup>
import { useOptions } from '@/composables/useOptions';
import SwitchButton from '@/components/SwitchButton.vue';
import ResetIcon from '@/components/icons/ResetIcon.vue';

const { playSound, stickyKeys, flyingKeys } = useOptions()

</script>

<template>
    <div class="flex flex-wrap w-full pb-3 mb-5 border-b border-slate-300 gap-5">
        <SwitchButton v-model="playSound"> Play sound </SwitchButton>
        <SwitchButton v-model="stickyKeys"> Sticky keys </SwitchButton>
        <Transition class="transition-all duration-300 ease-out" enter-from-class="scale-0" enter-to-class="scale-100"
            leave-to-class="scale-0">
            <ResetIcon v-if="stickyKeys" class="flex gap-2 items-center" />
        </Transition>
        <SwitchButton v-model="flyingKeys"> Flying keys </SwitchButton>
    </div>
</template>