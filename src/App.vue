<template>
  <v-app>
    <default>
      <router-view />
    </default>
    <cart-modal />
    <favorites-modal />
  </v-app>
</template>

<script setup lang="ts">
import Default from '@/layouts/default';
import CartModal from '@/components/Modal/CartModal/CartModal.vue';
import FavoritesModal from '@/components/Modal/FavoritesModal/FavoritesModal.vue';
</script>
