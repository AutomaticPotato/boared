<script setup lang="ts">
import KeyboardCase from '@/components/KeyboardCase.vue';
import { defaultLayout } from "@/constants/layouts/defaultLayout"
import KeySpawner from "@/components/KeySpawner.vue"
const keys = defaultLayout

</script>

<template>
  <div class="flex justify-center p-5">
    <KeyboardCase :keyboard-layout="keys" />
    <KeySpawner :keyboard-layout="keys" />
  </div>
</template>
