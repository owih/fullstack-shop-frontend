<template>
  <div class="d-flex align-center">
    <v-btn
      variant="text"
      icon="mdi-minus"
      @click="onUpdate(props.modelValue - 1)"
    />
    <div class="w-25">
      {{ props.modelValue }}
    </div>
    <v-btn
      variant="text"
      icon="mdi-plus"
      class="ma-0"
      @click="onUpdate(props.modelValue + 1)"
    />
  </div>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';

const props = defineProps({
  modelValue: {
    type: Number as PropType<number>,
    required: false,
    default: 0
  }
});
const emits = defineEmits<{(e: 'update:modelValue', value: number):void}>();
const onUpdate = (newCounterValue:number):void => {
  console.log(newCounterValue);
  emits('update:modelValue', newCounterValue);
};
</script>

<style scoped>
</style>
