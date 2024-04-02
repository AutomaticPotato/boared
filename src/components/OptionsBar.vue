<script lang="ts" setup>
import { useSideBar } from '@/composables/useSideBar';
import MenuIcon from '@/components/icons/MenuIcon.vue';
const { sideBarOpen } = useSideBar(); 
</script>

<template>
    <div class="flex  w-full pb-3 mb-5 justify-end">
        <MenuIcon @click="sideBarOpen = !sideBarOpen" class="cursor-pointer" />
    </div>
</template>