<template>
  <v-dialog
    v-model="dialogsStore.dialogsIsOpenState.favorites"
    width="768"
    min-height="400"
  >
    <v-card class="pa-2 pa-lg-6 overflow-hidden">
      <v-btn
        class="close"
        variant="text"
        icon="mdi-close"
        @click="onClickClose"
      />
      <favorites-section />
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useDialogsStore } from '@/store/useDialogsStore';
import FavoritesSection from '@/components/Favorites/FavoritesSection/FavoritesSection.vue';

const dialogsStore = useDialogsStore();
const onClickClose = ():void => {
  dialogsStore.toggleModal('favorites', false);
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
