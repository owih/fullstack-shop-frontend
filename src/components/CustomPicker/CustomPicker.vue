<template>
  <v-btn
    :id="`menu-activator-${id}`"
    variant="outlined"
  >
    <span class="font-weight-bold">
      Size
    </span>
    <span v-if="size">
      {{ `: ${size}` }}
    </span>
  </v-btn>
  <v-menu :activator="`#menu-activator-${id}`">
    <v-list>
      <v-list-item
        v-for="(item, index) in props.productSizes"
        :key="index"
        :value="index"
        @click="onClickSize"
      >
        <v-list-item-title>
          {{ item }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang='ts'>
import { PropType, ref } from 'vue';
import ProductSizes from '@/types/productSizes';
import ProductSize from '@/types/productSize';
import productSizes from '@/composibles/productSizes';

const props = defineProps({
  productSizes: {
    type: Array as PropType<ProductSizes>,
    required: true,
  },
});
const emits = defineEmits<{(e: 'update:modelValue', value: ProductSize): void}>();
const size = ref<string>();
const id:number = Math.floor(Math.random() * 10000);
const onClickSize = (e:Event):void => {
  const target = e.target as HTMLDivElement;
  const text = target.textContent as ProductSize;
  if (!target || !text || !productSizes.includes(text)) return;
  size.value = text;
  emits('update:modelValue', text);
};
</script>

<style scoped>
</style>
