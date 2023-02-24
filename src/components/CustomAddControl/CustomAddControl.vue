<template>
  <v-btn
    append-icon="mdi-cart-plus"
    variant="elevated"
    color="primary"
    class="text-shades-white px-6"
    :size="props.size"
    :loading="cartStore.getPendingProducts.includes(productId)"
    @click="onClickAdd"
  >
    Add
  </v-btn>
</template>

<script setup lang="ts">

import { useCartStore } from '@/store/useCartStore';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/useUserStore';
import { useCustomNotifyStore } from '@/store/useCustomNotifyStore';
import { PropType } from 'vue';
import ControlSize from '@/types/ui/controlSize';

const userStore = useUserStore();
const router = useRouter();
const notifyStore = useCustomNotifyStore();
const cartStore = useCartStore();

const props = defineProps({
  productId: {
    type: Number as PropType<number>,
    required: true,
  },
  size: {
    type: String as PropType<ControlSize>,
    required: false,
    default: 'default',
  }
});

const onClickAdd = () => {
  if (userStore.getIsUserAuth) {
    cartStore.addProductToCart(props.productId);
    return;
  }
  router.push({ name: 'Auth' });
  notifyStore.addNotify('You need to be Authorized', 'Error');
};

</script>
