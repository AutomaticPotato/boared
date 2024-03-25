<script setup lang="ts">
import KeyboardCase from '@/components/KeyboardCase.vue';
import { defaultLayout } from "@/constants/layouts/defaultLayout"

const keys = defaultLayout

</script>

<template>
  <div class="flex justify-center p-5">
    <KeyboardCase :keyboard-keys="keys" />
  </div>
</template>
