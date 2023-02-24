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
                {{ item.name }}
              </span>
            </div>
            <div :class="{'text-error font-weight-bold': isProductInCart && isProductInCart.count === props.product.stock }">
              {{ `Stock: ${props.product.stock}` }}
            </div>
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
            <v-row class="align-center">
              <v-col cols="auto">
                <custom-like-control
                  size="small"
                  :productId="props.product.id"
                />
              </v-col>
              <v-col cols="auto">
                <custom-add-control
                  v-if="!isProductInCart"
                  :productId="props.product.id"
                  size="large"
                />
                <custom-counter
                  v-else
                  :productId="props.product.id"
                  :max="props.product.stock"
                  size="large"
                />
              </v-col>
            </v-row>
          </v-card-actions>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang='ts'>
import CatalogDetailCarousel from '@/components/CatalogDetail/CatalogDetailCarousel/CatalogDetailCarousel.vue';
import CustomLikeControl from '@/components/CustomLikeControl/CustomLikeControl.vue';
import { computed, PropType } from 'vue';
import Product from '@/types/product/product';
import { useCartStore } from '@/store/useCartStore';
import CustomImageMock from '@/components/CustomImageMock/CustomImageMock.vue';
import CustomCounter from '@/components/CustomCounter/CustomCounter.vue';
import CustomAddControl from '@/components/CustomAddControl/CustomAddControl.vue';

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  }
});

const cartStore = useCartStore();

const baseBackendUrl: string = import.meta.env.VITE_BACKEND_BASE_URL;
const isProductInCart = computed(() => cartStore.getProducts.find((item) => item.id === props.product.id));
</script>
