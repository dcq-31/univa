<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div>
    <Navbar></Navbar>
    <RouterView></RouterView>
    <Footer></Footer>
  </div>
</template>
