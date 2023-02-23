<template>
  <div
    v-if="userStore.getPending.user"
    class="w-100 h-screen position-relative"
  >
    <custom-loader
      :width="6"
      :size="92"
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
import { useCartStore } from '@/store/useCartStore';
import { useRouter } from 'vue-router';
import { useFavoritesStore } from '@/store/useFavoritesStore';

const router = useRouter();
const userStore = useUserStore();
const cartStore = useCartStore();
const favoritesStore = useFavoritesStore();

router.beforeEach(async (to) => {
  if (!userStore.getIsUserWasRequested) {
    await userStore.getIsUserAuthToStore();
    userStore.getIsUserAuth && updateStates();
  }

  if (to.name === 'Profile') {
    if (userStore.getIsUserAuth) return true;
    await router.push({ name: 'Auth' });
  }

  if (to.name === 'Auth') {
    if (!userStore.getIsUserAuth) return true;
    await router.push({ name: 'Profile' });
  }
});

const updateStates = () => {
  cartStore.getCartFromApiToStore();
  favoritesStore.getFavoritesFromApiToStore();
};
</script>
