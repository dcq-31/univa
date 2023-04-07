<script lang="ts" setup>
import { RouterView } from 'vue-router'
import MainNavbar from '@/components/layout/MainNavbar.vue'
import MainFooter from '@/components/layout/MainFooter.vue'
</script>

<template>
  <div>
    <MainNavbar></MainNavbar>
    <RouterView></RouterView>
    <MainFooter></MainFooter>
  </div>
</template>
