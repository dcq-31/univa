<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
</script>

<template>
  <div>
    <Navbar></Navbar>
    <RouterView></RouterView>
  </div>
</template>
