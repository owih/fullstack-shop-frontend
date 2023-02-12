<template>
  <v-card class="h-100 d-flex flex-column">
    <v-img
      class="align-end text-white"
      height="300"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    />
    <div
      v-if="props.product.sale"
      class="sale rounded-sm bg-deep-orange-accent-3 text-shades-white font-weight-bold"
    >
      SALE
    </div>
    <div class="like text-shades-white">
      <v-btn
        icon="mdi-heart"
        variant="text"
        class="text-shades-black"
        @click="onClickLike"
      />
    </div>
    <v-row>
      <v-col>
        <v-card-title>
          <router-link
            :to="`/catalog/${props.product.id}`"
            class="px-0 text-decoration-none"
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
      {{ props.product.type }}
      |
      {{ `stock: ${props.product.stock}` }}
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

      <v-btn
        append-icon="mdi-cart-plus"
      >
        Add
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';
import Product from '@/types/product';

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  }
});
const onClickLike = ():void => {
  console.log('like');
};
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
