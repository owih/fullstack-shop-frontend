<template>
  <v-btn
    icon="mdi-heart"
    variant="text"
    class="text-shades-black bg-white"
    :size="size"
    :class="{ 'text-error': isProductInFavorites }"
    :loading="favoritesStore.getPendingProducts.includes(productId) || favoritesStore.getPending.get"
    @click="onClickLike"
  />
</template>

<script setup lang="ts">

import { useFavoritesStore } from '@/store/useFavoritesStore';
import { computed, PropType } from 'vue';
import { useUserStore } from '@/store/useUserStore';
import { useRouter } from 'vue-router';
import { useCustomNotifyStore } from '@/store/useCustomNotifyStore';
import ControlSize from '@/types/ui/controlSize';

const userStore = useUserStore();
const router = useRouter();
const favoritesStore = useFavoritesStore();
const notifyStore = useCustomNotifyStore();

const props = defineProps({
  productId: {
    type: Number as PropType<number>,
    required: true,
  },
  size: {
    type: String as PropType<ControlSize>,
    required: false,
    default: 'default',
  }
});

const isProductInFavorites = computed(() => favoritesStore.getProducts.find((item) => item.id === props.productId));
const onClickLike = ():void => {
  if (userStore.getIsUserAuth) {
    isProductInFavorites.value
      ? favoritesStore.deleteProductFromFavorites(props.productId)
      : favoritesStore.addProductToFavorites(props.productId);
    return;
  }
  router.push({ name: 'Auth' });
  notifyStore.addNotify('You need to be Authorized', 'Error');
};
</script>
