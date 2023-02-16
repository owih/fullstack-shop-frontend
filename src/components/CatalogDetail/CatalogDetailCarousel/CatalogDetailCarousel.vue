<template>
  <v-carousel
    :height="getCarouselHeight()"
    cycle
    interval="6000"
    class="rounded"
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(slide, i) in props.slides"
      :key="i"
    >
      <v-sheet
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <v-img
            class="h-100"
            :src="slide"
            cover
          />
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';

const props = defineProps({
  slides: {
    type: Array as PropType<string[]>,
    required: true,
  }
});

const getCarouselHeight = () => {
  return window.matchMedia('(min-width:1200px)').matches ? 600 : 400;
};
</script>

<style scoped>
</style>
