<template>
  <v-dialog
    v-model="dialogsStore.dialogsIsOpenState.cart"
    width="768"
    min-height="400"
  >
    <v-card class="pa-2 pa-lg-6 flex-grow-1">
      <v-btn
        class="close"
        variant="text"
        icon="mdi-close"
        @click="onClickClose"
      />
      <cart-section />
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useDialogsStore } from '@/store/useDialogsStore';
import CartSection from '@/components/Cart/CartSection/CartSection.vue';

const dialogsStore = useDialogsStore();
const onClickClose = ():void => {
  dialogsStore.toggleModal('cart', false);
};
</script>

<style lang="scss" scoped>
.close {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}
</style>
