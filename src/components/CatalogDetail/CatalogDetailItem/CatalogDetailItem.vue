<template>
  <v-card
    variant="text"
    class="w-100"
  >
    <v-row class="align-center justify-center">
      <v-col
        cols="12"
        sm="10"
        md="6"
      >
        <catalog-detail-carousel
          v-if="props.product.image.length && props.product.image.length > 1"
          :slides="props.product.image"
        />
        <v-img
          v-else
          :width="300"
          :src="baseBackendUrl + props.product.image[0].url"
          :alt="props.product.image[0].name"
          aspect-ratio="1/1"
          cover
          class="mx-auto h-100"
        />
        <custom-image-mock
          v-if="!props.product.image.length"
          :height="300"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="h-100 d-flex flex-column justify-space-between"
      >
        <div class="pb-3">
          <div class="text-h5 text-lg-h3 mb-3">
            {{ props.product.name }}
          </div>
          <div class="mb-3 text-grey">
            <div class="d-flex m1-n2">
              <span
                v-for="item in props.product.type"
                :key="item.id"
                class="p1-2"
              >
                {{ item.type.name }}
              </span>
            </div>
            {{ `Stock: ${props.product.stock}` }}
          </div>
          <div class="mb-3">
            {{ props.product.description }}
          </div>
        </div>
        <div>
          <div class="mb-3">
            <div
              v-if="!props.product.sale"
              class="text-h6"
            >
              {{ `$${props.product.price}` }}
            </div>
            <div v-else>
              <del class="d-block text-grey">
                {{ `$${props.product.price}` }}
              </del>
              <span class="text-h4 d-inline-block">
                {{ `$${Math.floor(props.product.price - (props.product.price * props.product.sale / 100))}` }}
              </span>
            </div>
          </div>
          <v-card-actions class="px-0">
            <v-btn
              variant="elevated"
              class="text-shades-white"
              size="large"
              @click="onClickLike"
            >
              <v-icon icon="mdi-heart" />
            </v-btn>
            <v-btn
              append-icon="mdi-cart-plus"
              variant="elevated"
              color="primary"
              class="text-shades-white px-6"
              size="large"
              @click="onClickAdd"
            >
              Add
            </v-btn>
          </v-card-actions>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang='ts'>
import CatalogDetailCarousel from '@/components/CatalogDetail/CatalogDetailCarousel/CatalogDetailCarousel.vue';
import { PropType } from 'vue';
import Product from '@/types/product';
import { useCartStore } from '@/store/useCartStore';
import { useUserStore } from '@/store/useUserStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { useRouter } from 'vue-router';
import { useCustomNotifyStore } from '@/store/useCustomNotifyStore';
import CustomImageMock from '@/components/CustomImageMock/CustomImageMock.vue';

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  }
});

const cartStore = useCartStore();
const userStore = useUserStore();
const favoritesStore = useFavoritesStore();
const router = useRouter();
const notifyStore = useCustomNotifyStore();

const baseBackendUrl: string = import.meta.env.VITE_BACKEND_BASE_URL;

const onClickAdd = () => {
  if (userStore.getIsUserAuth) {
    console.log('add');
    return;
  }
  router.push({ name: 'Auth' });
  notifyStore.addNotify('You need to be Authorized', 'Error');
};
const onClickLike = ():void => {
  if (userStore.getIsUserAuth) {
    console.log('add');
    return;
  }
  router.push({ name: 'Auth' });
  notifyStore.addNotify('You need to be Authorized', 'Error');
};
</script>
