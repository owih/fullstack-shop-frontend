<template>
  <v-app>
    <HeaderLayout />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';
import HeaderLayout from '@/components/HeaderLayout/HeaderLayout.vue';

export default defineComponent({
  components: { HeaderLayout }
});
</script>

<style lang="scss" scoped>
</style>
