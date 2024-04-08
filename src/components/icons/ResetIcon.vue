<script lang="ts" setup>

const emits = defineEmits(['reset'])
const resetPressed = () => {
  emits('reset')
}

</script>

<template>
  <div @click="resetPressed" class="spin hover:cursor-pointer self-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 21 21">
      <g fill="none" fillRule="evenodd" stroke="#EF4444" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3.578 6.487A8 8 0 1 1 2.5 10.5"></path>
        <path d="M7.5 6.5h-4v-4"></path>
      </g>
    </svg>
  </div>
</template>


<style scoped>
.spin:hover {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
}
</style>