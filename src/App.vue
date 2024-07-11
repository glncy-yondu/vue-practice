<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ColorBox from '@/components/base/ColorBox.vue'
</script>

<template>
  <div class="justify center flex h-screen w-screen items-center">
    <h1 class="text-techy-blue-300 w-full text-center text-3xl font-bold underline">
      Hello World!
    </h1>
    <ColorBox selected-color="bg-brand-techy-blue-400" />
  </div>

  <!-- <RouterView /> -->
</template>
