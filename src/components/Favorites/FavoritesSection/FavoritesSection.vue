<template>
  <v-card
    variant="text"
    class="h-100 flex-grow-1 d-flex flex-column"
  >
    <h2 class="pb-3 px-3 px-lg-0 pb-lg-5">
      Favorites {{ `(${favoritesStore.getPending.get ? '?' : favoritesStore.getProducts.length})` }}
    </h2>
    <div
      v-if="favoritesStore.getPending.get"
      class="w-100 h-100 position-relative flex-grow-1"
    >
      <custom-loader
        :width="6"
        :size="92"
      />
    </div>
    <div
      v-if="!favoritesStore.getPending.get && favoritesStore.getProducts.length"
      class="overflow-y-auto px-3"
    >
      <favorites-list :products="favoritesStore.getProducts" />
    </div>
    <div
      v-if="!favoritesStore.getPending.get && favoritesStore.getProducts.length"
      class="d-flex justify-space-between pt-3 pt-lg-5"
    >
      <v-btn
        block
        color="error"
        @click="onClear"
      >
        Clear all
      </v-btn>
    </div>
    <div
      v-if="!favoritesStore.getPending.get && !favoritesStore.getProducts.length"
      class="flex-grow-1 d-flex flex-column justify-space-between"
    >
      <div class="pb-3">
        Your favorite list is currently empty ;(
      </div>
      <v-btn
        :to="{ name: 'Catalog' }"
        variant="tonal"
        @click="onClickCatalog"
      >
        Go to catalog
      </v-btn>
    </div>
  </v-card>
</template>

<script setup lang='ts'>
import FavoritesList from '@/components/Favorites/FavoritesList/FavoritesList.vue';
import CustomLoader from '@/components/CustomLoader/CustomLoader.vue';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { useDialogsStore } from '@/store/useDialogsStore';

const favoritesStore = useFavoritesStore();
const dialogsStore = useDialogsStore();

const onClear = () => {
  favoritesStore.clearFavorites();
};
const onClickCatalog = () => {
  dialogsStore.toggleModal('favorites', false);
};
</script>
