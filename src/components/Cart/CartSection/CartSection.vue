<template>
  <v-card
    variant="text"
    class="h-100 flex-grow-1 d-flex flex-column"
  >
    <h2 class="pb-3 px-3 px-lg-0 pb-lg-5">
      Cart {{ `(${cartStore.getPending.get ? '?' : cartStore.getProducts.length})` }}
    </h2>
    <div
      v-if="cartStore.getPending.get"
      class="w-100 h-100 position-relative flex-grow-1"
    >
      <custom-loader
        :width="6"
        :size="92"
      />
    </div>
    <div
      v-if="!cartStore.getPending.get && cartStore.getProducts.length"
      class="flex-grow-1 overflow-y-auto"
    >
      <div class="px-3">
        <cart-list :products="cartStore.getProducts" />
      </div>
      <div class="d-flex justify-space-between pt-3 pt-lg-5">
        <v-btn
          block
          color="primary"
        >
          Checkout
        </v-btn>
      </div>
    </div>
    <div
      v-if="!cartStore.getPending.get && !cartStore.getProducts.length"
      class="flex-grow-1 d-flex flex-column justify-space-between"
    >
      <div class="pb-3">
        Your cart is currently empty ;(
      </div>
      <v-btn
        :to="{ name: 'Catalog' }"
        variant="tonal"
        @click="onClickCatalog"
      >
        Go to catalog
      </v-btn>
    </div>
  </v-card>
</template>

<script setup lang='ts'>
import CartList from '@/components/Cart/CartList/CartList.vue';
import CustomLoader from '@/components/CustomLoader/CustomLoader.vue';
import { useCartStore } from '@/store/useCartStore';
import { useDialogsStore } from '@/store/useDialogsStore';

const cartStore = useCartStore();
const dialogsStore = useDialogsStore();

const onClickCatalog = () => {
  dialogsStore.toggleModal('cart', false);
};
</script>

<style scoped>
</style>
