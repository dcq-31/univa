<script lang="ts" setup>
interface IFeatureWidgetProps {
  title: string
  description: string
}

const props = defineProps<IFeatureWidgetProps>()
</script>
<template>
  <div class="w-full px-4 md:w-1/2 lg:w-1/4">
    <div class="group mb-12 bg-white">
      <div
        class="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
      >
        <span
          class="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"
        ></span>
        <slot></slot>
      </div>
      <h4 class="text-dark mb-3 text-xl font-bold">{{ title }}</h4>
      <p class="text-body-color mb-8 lg:mb-11">
        {{ description }}
      </p>
    </div>
  </div>
</template>
