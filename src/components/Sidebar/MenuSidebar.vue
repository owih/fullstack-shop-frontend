<template>
  <v-navigation-drawer
    v-model="dialogsStore.getDialogsIsOpenStates.menu"
    temporary
    floating
    location="right"
  >
    <div class="d-flex align-center justify-space-between">
      <v-list-item
        title="Sidebar"
        class="py-2"
      />
      <v-list-item
        class="py-2"
      >
        <v-btn
          variant="text"
          color=""
          icon="mdi-close"
          @click="onClickClose"
        />
      </v-list-item>
    </div>

    <v-list
      density="compact"
      nav
    >
      <v-list-item
        v-for="item in sidelinnks"
        :key="item.id"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.value"
        :to="item.url"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang='ts'>
import { useDialogsStore } from '@/store/useDialogsStore';
import sidelinnks from '@/composibles/sideLinnks';

const dialogsStore = useDialogsStore();
const onClickClose = ():void => {
  dialogsStore.toggleModal('menu');
};
</script>

<style scoped>
</style>
