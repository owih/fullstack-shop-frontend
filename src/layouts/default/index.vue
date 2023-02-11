<template>
  <v-app>
    <header-layout />
    <v-main>
      <slot />
    </v-main>
  </v-app>
  <menu-sidebar />
</template>

<script>
import { defineComponent } from 'vue';
import HeaderLayout from '@/components/HeaderLayout/HeaderLayout.vue';
import MenuSidebar from '@/components/Sidebar/MenuSidebar.vue';

export default defineComponent({
  components: { MenuSidebar, HeaderLayout }
});
</script>

<style lang="scss" scoped>
</style>
