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
        <catalog-detail-carousel :slides="product.images" />
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="h-100 d-flex flex-column justify-space-between"
      >
        <div class="pb-3">
          <div class="text-h5 text-lg-h3 mb-3">
            {{ product.name }}
          </div>
          <div class="mb-3 text-grey">
            {{ product.type }}
          </div>
          <div class="mb-3">
            {{ product.description }}
          </div>
        </div>
        <div>
          <div class="mb-3">
            <div
              v-if="!product.sale"
              class="text-h6"
            >
              {{ `$${product.price}` }}
            </div>
            <div v-else>
              <del class="d-block text-grey">
                {{ `$${product.price}` }}
              </del>
              <span class="text-h4 d-inline-block">
                {{ `$${Math.floor(product.price - (product.price * product.sale / 100))}` }}
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
import Product from '@/types/product';

const product: Product = {
  id: (Math.random() * 10),
  name: 'T-shirt with some prints',
  price: 333,
  description: 'Some text description some text description some text description some text description ',
  type: 'T-shirt',
  sale: 30,
  stock: 33,
  sizes: ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl'],
  images: ['https://cdn.vuetifyjs.com/images/cards/docks.jpg', 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'],
};
</script>

<style scoped>
</style>
