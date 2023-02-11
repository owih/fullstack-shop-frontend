<template>
  <v-app>
    <default>
      <router-view />
    </default>
    <cart-modal />
  </v-app>
</template>

<script setup lang="ts">
import Default from '@/layouts/default';
import CartModal from '@/components/Modal/CartModal.vue';
</script>
