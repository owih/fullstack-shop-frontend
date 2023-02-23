<template>
  <div class="d-flex align-center">
    <v-btn
      variant="text"
      icon="mdi-minus"
      @click="onUpdate(props.value - 1)"
    />
    <div class="w-25">
      {{ props.value }}
    </div>
    <v-btn
      variant="text"
      icon="mdi-plus"
      class="ma-0"
      @click="onUpdate(props.value + 1)"
    />
  </div>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';

const props = defineProps({
  value: {
    type: Number as PropType<number>,
    required: false,
    default: 0
  }
});
const emits = defineEmits<{(e: 'update', value: number):void}>();
const onUpdate = (newCounterValue:number):void => {
  console.log(newCounterValue);
  emits('update', newCounterValue);
};
</script>

<style scoped>
</style>
