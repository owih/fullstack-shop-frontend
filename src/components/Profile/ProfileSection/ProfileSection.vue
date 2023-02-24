<template>
  <div
    v-if="userStore.getPending.info"
    class="w-100 h-100 position-relative"
  >
    <custom-loader
      :width="6"
      :size="92"
    />
  </div>
  <profile-form
    v-if="!userStore.getPending.info"
    :userInfo="userStore.getUserInfo"
    :pending="userStore.getPending.update"
    @onSubmit="onSubmit"
    @onLogout="onLogout"
  />
</template>

<script setup lang='ts'>
import ProfileForm from '@/components/Profile/ProfileForm/ProfileForm.vue';
import CustomLoader from '@/components/CustomLoader/CustomLoader.vue';
import { onMounted } from 'vue';
import { useUserStore } from '@/store/useUserStore';
import UserInfo from '@/types/user/userInfo';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/store/useCartStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { useProductsStore } from '@/store/useProductsStore';

const router = useRouter();
const userStore = useUserStore();
const cartStore = useCartStore();
const favoritesStore = useFavoritesStore();
const productStore = useProductsStore();

const onSubmit = (formData: UserInfo):void => {
  userStore.updateUserInfoFromApiToStore(formData);
};
const getUserInfo = async () => {
  await userStore.getUserInfoFromApiToStore();
};

const onLogout = () => {
  userStore.logout();
  cartStore.clear();
  favoritesStore.clear();
  productStore.clearFiltered();

  router.push({ name: 'Auth' });
};

onMounted(getUserInfo);
</script>

<style scoped>
</style>
