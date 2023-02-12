<template>
  <v-carousel
    height="600"
    hide-delimiters
    progress="progress"
    cycle
    interval="6000"
  >
    <v-carousel-item
      v-for="(slide, i) in mockData"
      :key="i"
    >
      <v-sheet
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h6 text-md-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang='ts'>
const mockData = ['First slide', 'Second', 'Third Slide :)))', 'Test test test', 'Text text text'];
</script>

<style scoped>
</style>
