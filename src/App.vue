<template>
  <div class="justify-center flex flex-col h-screen w-screen items-center gap-4">
    <h1 class="text-techy-blue-300 w-full text-center text-3xl font-bold underline hidden">
      Hello World!
    </h1>
    <MyComponent></MyComponent>
    <MyComponentCss></MyComponentCss>
  </div>

  <!-- <RouterView /> -->
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ColorBox from '@/components/base/ColorBox.vue'
import MyComponent from './components/example/MyComponent.vue';
import MyComponentCss from './components/example/MyComponentCss.vue'
</script>