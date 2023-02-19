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
          v-if="props.product.image.length"
          :slides="props.product.image"
        />
        <div
          v-else
          class="image-mock"
        >
          <v-icon
            icon="mdi-image"
            size="x-large"
          />
          <span class="pl-3 text-h6 font-weight-regular">
            No image
          </span>
        </div>
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
            >
              <v-icon icon="mdi-heart" />
            </v-btn>
            <v-btn
              append-icon="mdi-cart-plus"
              variant="elevated"
              color="primary"
              class="text-shades-white px-6"
              size="large"
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

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  }
});
</script>

<style scoped lang="scss">
.image-mock {
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
