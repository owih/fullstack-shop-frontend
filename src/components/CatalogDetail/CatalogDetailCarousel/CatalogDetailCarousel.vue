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
            :src="baseBackendUrl + slide.url"
            :alt="baseBackendUrl + slide.name"
            cover
          />
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';
import ProductImage from '@/types/product/productImage';

const props = defineProps({
  slides: {
    type: Array as PropType<ProductImage[]>,
    required: true,
  }
});

const baseBackendUrl: string = import.meta.env.VITE_BACKEND_BASE_URL;

const getCarouselHeight = () => {
  return window.matchMedia('(min-width:1200px)').matches ? 600 : 400;
};
</script>

<style scoped>
</style>
