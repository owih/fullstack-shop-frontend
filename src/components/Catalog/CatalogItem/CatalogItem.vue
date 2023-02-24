<template>
  <v-card class="h-100 d-flex flex-column">
    <v-img
      v-if="props.product.image.length"
      height="300"
      :src="baseUrl + props.product.image[0].url"
      :alt="baseUrl + props.product.image[0].name"
      cover
    />
    <custom-image-mock
      v-else
      :height="300"
    />
    <div
      v-if="props.product.sale"
      class="sale rounded-sm bg-deep-orange-accent-3 text-shades-white font-weight-bold"
    >
      SALE
    </div>
    <div class="like text-shades-white">
      <custom-like-control
        :productId="props.product.id"
        size="small"
      />
    </div>
    <v-row>
      <v-col>
        <v-card-title>
          <router-link
            :to="`/catalog/${props.product.id}`"
            class="px-0 text-decoration-none text-primary"
          >
            {{ props.product.name }}
          </router-link>
        </v-card-title>
      </v-col>
      <v-col cols="auto">
        <div
          v-if="!props.product.sale"
          class="text-h6 px-3 py-2"
        >
          {{ `$${props.product.price}` }}
        </div>
        <div
          v-else
          class="px-3 py-2"
        >
          <div class="d-flex align-center">
            <del class="d-block mr-2 text-grey text-subtitle-2">
              {{ `$${props.product.price}` }}
            </del>
            <span class="text-h6 d-inline-block">
              {{ `$${Math.floor(props.product.price - (props.product.price * props.product.sale / 100))}` }}
            </span>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-card-subtitle>
      <div class="d-flex m1-n2">
        <span
          v-for="item in props.product.type"
          :key="item.id"
          class="p1-2"
        >
          {{ item.name }}
        </span>
      </div>
      {{ `Stock: ${props.product.stock}` }}
    </v-card-subtitle>

    <v-card-text>
      <div>
        {{ props.product.description }}
      </div>
    </v-card-text>

    <v-card-actions class="justify-space-between">
      <v-btn :to="`/catalog/${props.product.id}`">
        Detail
      </v-btn>

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
    </v-card-actions>
  </v-card>
</template>

<script setup lang='ts'>
import { computed, PropType } from 'vue';
import Product from '@/types/product/product';
import CustomImageMock from '@/components/CustomImageMock/CustomImageMock.vue';
import CustomCounter from '@/components/CustomCounter/CustomCounter.vue';
import CustomAddControl from '@/components/CustomAddControl/CustomAddControl.vue';
import { useCartStore } from '@/store/useCartStore';
import CustomLikeControl from '@/components/CustomLikeControl/CustomLikeControl.vue';

const cartStore = useCartStore();

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  }
});
const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
const isProductInCart = computed(() => cartStore.getProducts.find((item) => item.id === props.product.id));
</script>

<style scoped lang="scss">
.sale {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 4px 8px;
}
.like {
  position: absolute;
  right: 16px;
  top: 16px;
}
</style>
