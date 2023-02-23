<template>
  <div class="position-absolute h-100 w-100 d-flex align-center justify-center pb-6 pb-lg-12">
    <v-progress-circular
      indeterminate
      :size="props.size"
      :width="props.width"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: Number,
    required: false,
    default: 62,
  },
  width: {
    type: Number,
    required: false,
    default: 1,
  }
});
</script>

<style scoped>

</style>
