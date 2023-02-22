<template>
  <div
    v-if="userStore.getPending"
    class="w-100 h-screen position-relative"
  >
    <custom-loader
      :width="6"
      :size="72"
    />
  </div>
  <v-app v-else>
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
import CustomLoader from '@/components/CustomLoader/CustomLoader.vue';
import { useUserStore } from '@/store/useUserStore';
import { onBeforeMount, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();
const updateIsUserAuth = () => {
  userStore.getIsUserAuthToStore();
};

router.beforeEach((to) => {
  if (to.name !== 'Profile') return true;

  watchEffect(() => {
    if (userStore.getPending) return;
    if (userStore.getIsUserAuth) return true;
  });
  router.push({ name: 'Auth' });
});

onBeforeMount(updateIsUserAuth);
</script>
