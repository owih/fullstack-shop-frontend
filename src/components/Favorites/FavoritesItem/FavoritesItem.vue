<template>
  <v-card
    variant="tonal"
    class="pa-3 rounded-lg"
  >
    <v-btn
      class="remove"
      icon="mdi-close"
      variant="text"
      color="error"
      size="small"
      :loading="favoritesStore.getPendingProducts.includes(product.id)"
      @click="onRemove"
    />
    <v-row>
      <v-col cols="auto">
        <v-img
          v-if="props.product.image"
          class="text-white rounded-lg"
          height="160"
          width="140"
          :src="baseUrl + props.product.image[0].url"
          cover
        />
        <custom-image-mock
          v-else
          :height="300"
        />
      </v-col>
      <v-col class="d-flex flex-column flex-wrap">
        <v-card-title class="pa-0 mb-2 pr-4">
          <router-link
            :to="`/catalog/${props.product.id}`"
            class="text-decoration-none"
            @click="onClickDetail"
          >
            {{ props.product.name }}
          </router-link>
        </v-card-title>
        <v-card-subtitle class="px-0 flex-grow-1">
          <div class="d-flex m1-n2">
            <span
              v-for="item in props.product.type"
              :key="item.id"
              class="p1-2"
            >
              {{ item.name }}
            </span>
          </div>
          <div :class="{'text-error font-weight-bold': isProductInCart && isProductInCart.count === props.product.stock }">
            {{ `Stock: ${props.product.stock}` }}
          </div>
        </v-card-subtitle>
        <v-card-text class="pa-0">
          <div
            v-if="!props.product.sale"
            class="text-subtitle-1"
          >
            {{ `$${props.product.price}` }}
          </div>
          <div v-else>
            <div>
              <del class="d-block text-grey text-subtitle-2">
                {{ `$${props.product.price}` }}
              </del>
              <span class="d-inline-block text-subtitle-1">
                {{ `$${Math.floor(props.product.price - (props.product.price * props.product.sale / 100))}` }}
              </span>
            </div>
          </div>
        </v-card-text>
        <v-card-actions class="justify-space-between px-0">
          <v-row class="justify-space-between align-center">
            <v-col cols="auto">
              <v-btn
                :to="`/catalog/${props.product.id}`"
                color="primary"
                variant="elevated"
                size="default"
                @click="onClickDetail"
              >
                Detail
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <custom-add-control
                v-if="!isProductInCart"
                :productId="props.product.id"
              />
              <custom-counter
                v-else
                :productId="props.product.id"
                :max="props.product.stock"
                class="justify-end"
              />
            </v-col>
          </v-row>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang='ts'>
import { computed, PropType } from 'vue';
import CustomCounter from '@/components/CustomCounter/CustomCounter.vue';
import CustomImageMock from '@/components/CustomImageMock/CustomImageMock.vue';
import CustomAddControl from '@/components/CustomAddControl/CustomAddControl.vue';
import { useCartStore } from '@/store/useCartStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import FavoritesProduct from '@/types/product/favoritesProduct';
import { useDialogsStore } from '@/store/useDialogsStore';
import { useRoute } from 'vue-router';
import { useProductsStore } from '@/store/useProductsStore';

const props = defineProps({
  product: {
    type: Object as PropType<FavoritesProduct>,
    required: true,
  }
});

const cartStore = useCartStore();
const favoritesStore = useFavoritesStore();
const dialogsStore = useDialogsStore();
const route = useRoute();
const productStore = useProductsStore();

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
const isProductInCart = computed(() => cartStore.getProducts.find((item) => item.id === props.product.id));

const onRemove = ():void => {
  favoritesStore.deleteProductFromFavorites(props.product.id);
};
const onClickDetail = () => {
  dialogsStore.toggleModal('favorites', false);
  if (route.name === 'CatalogDetail') {
    productStore.getProductFromApiToStore(props.product.id);
  }
};
</script>

<style scoped lang="scss">
.remove {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
