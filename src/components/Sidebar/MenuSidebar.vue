<template>
  <v-navigation-drawer
    v-model="dialogsStore.getDialogsIsOpenStates.menu"
    temporary
    floating
    location="right"
  >
    <v-list-item
      title="Sidebar"
      class="py-5"
    />

    <v-list
      density="compact"
      nav
    >
      <v-list-item
        prepend-icon="mdi-alpha-n-box"
        title="Home"
        value="home"
        to="/"
      />
      <v-list-item
        prepend-icon="mdi-creation"
        title="Catalog"
        value="catalog"
        to="/catalog"
      />
      <v-list-item
        prepend-icon="mdi-account"
        title="Profile"
        value="profile"
        to="/profile"
      />
      <v-list-item
        prepend-icon="mdi-forum"
        title="Info"
        value="info"
        to="/info"
      />
      <v-list-item
        prepend-icon="mdi-information-outline"
        title="Cart"
        value="cart"
        to="/cart"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang='ts'>
import { useDialogsStore } from '@/store/useDialogsStore';

const dialogsStore = useDialogsStore();
</script>

<style scoped>
</style>
