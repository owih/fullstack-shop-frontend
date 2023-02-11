<template>
  <v-dialog
    v-model="dialogsStore.getDialogsIsOpenStates.cart"
    width="auto"
  >
    <v-card>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          block
          @click="onClick"
        >
          Close Dialog
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useDialogsStore } from '@/store/useDialogsStore';

const dialogsStore = useDialogsStore();
const onClick = ():void => {
  dialogsStore.toggleModal('cart', false);
};
</script>

<style lang="scss" scoped>

</style>
