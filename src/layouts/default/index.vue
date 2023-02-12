<template>
  <v-app>
    <header-layout />
    <v-main class="pt-0 pb-10">
      <slot />
    </v-main>
    <footer-layout />
  </v-app>
  <menu-sidebar />
</template>

<script setup lang="ts">
import HeaderLayout from '@/components/HeaderLayout/HeaderLayout.vue';
import MenuSidebar from '@/components/Sidebar/MenuSidebar.vue';
import FooterLayout from '@/components/FooterLayout/FooterLayout.vue';
</script>

<style lang="scss" scoped>
</style>
