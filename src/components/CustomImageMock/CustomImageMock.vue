<template>
  <div
    class="image-mock"
    :style="`height: ${props.height}px`"
  >
    <v-icon
      icon="mdi-image"
      size="x-large"
    />
    <span class="pl-3 text-h6 font-weight-regular">
      No image
    </span>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  height: {
    type: Number as PropType<number>,
    required: true,
  }
});
</script>

<style scoped lang="scss">
.image-mock {
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
