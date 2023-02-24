<template>
  <div class="d-flex align-center">
    <v-btn
      variant="text"
      :size="props.size"
      :disabled="cartStore.getPendingProducts.includes(productId) || counterValue <= 0"
      @click="onUpdate(counterValue - 1)"
    >
      <v-icon
        icon="mdi-minus"
        :size="props.size"
      />
    </v-btn>
    <div
      v-if="!cartStore.getPendingProducts.includes(productId)"
      class="w-25 flex-shrink-0 text-center"
    >
      {{ counterValue }}
    </div>
    <div
      v-else
      class="w-25 h-100 position-relative flex-shrink-0 d-flex align-center justify-center"
    >
      <v-btn
        class="position-absolute"
        :loading="true"
      />
    </div>
    <v-btn
      variant="text"
      class="ma-0"
      :size="props.size"
      :disabled="cartStore.getPendingProducts.includes(productId) || counterValue >= props.max"
      @click="onUpdate(counterValue + 1)"
    >
      <v-icon
        icon="mdi-plus"
        :size="props.size"
      />
    </v-btn>
  </div>
</template>

<script setup lang='ts'>
import { computed, onMounted, PropType, ref, watch } from 'vue';
import { useCartStore } from '@/store/useCartStore';
import { debounce } from 'lodash';

const props = defineProps({
  productId: {
    type: Number as PropType<number>,
    required: true,
  },
  max: {
    type: Number as PropType<number>,
    required: false,
    default: 1000,
  },
  size: {
    type: String as PropType<string>,
    required: false,
    default: 'default',
  },
});

const counterValue = ref<number>(1);
const cartStore = useCartStore();
const productInCart = computed(() => cartStore.getProducts.find((item) => item.id === props.productId));

watch(productInCart, (value) => {
  if (!value) return;
  updateCounterValue();
});

const updateCounterValue = () => {
  if (!productInCart.value) return;
  counterValue.value = productInCart.value.count;
};

const onUpdate = (value: number):void => {
  counterValue.value = value;
  updateCartValue();
};

const updateCartValue = debounce(():void => {
  cartStore.updateCartFromApiToStore(props.productId, counterValue.value);
}, 500);

onMounted(updateCounterValue);
</script>
