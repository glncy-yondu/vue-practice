<template>
  <Calendar borderless transparent expanded class="my-calendar" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from 'v-calendar'
import 'v-calendar/style.css'

const date = ref(new Date())
</script>

<style scoped>
.my-calendar {
  display: none;
}
</style>
