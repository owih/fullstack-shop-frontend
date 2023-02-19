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
      <template
        v-for="item in useSideLinks"
        :key="item.id"
      >
        <v-list-item
          v-if="item.url"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
          :to="item.url"
        />
        <v-list-item
          v-else
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
          @click="onClickModalLink"
        />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang='ts'>
import { useDialogsStore } from '@/store/useDialogsStore';
import useSideLinks from '@/composibles/useSideLinks';

const dialogsStore = useDialogsStore();
const onClickClose = ():void => {
  dialogsStore.toggleModal('menu');
};
const onClickModalLink = ():void => {
  dialogsStore.toggleModal('menu');
  dialogsStore.toggleModal('favorites');
};
</script>

<style scoped>
</style>
