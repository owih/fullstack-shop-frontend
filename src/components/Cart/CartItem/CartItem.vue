<template>
  <v-card
    variant="tonal"
    class="pa-3"
  >
    <v-row>
      <v-col cols="auto">
        <v-img
          class="text-white rounded-lg"
          height="160"
          width="140"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
        />
      </v-col>
      <v-col class="d-flex flex-column flex-wrap">
        <v-card-title class="pa-0 mb-2 pr-4">
          <router-link
            :to="`/catalog/${props.product.id}`"
            class="text-decoration-none"
          >
            {{ props.product.name }}
          </router-link>
        </v-card-title>
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
        <v-card-actions class="pa-0 d-flex justify-space-between">
          <custom-picker
            :productSizes="props.product.sizes"
            @update:modelValue="onUpdateSize"
          />
          <custom-counter v-model="counter" />
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang='ts'>
import { PropType, ref } from 'vue';
import Product from '@/types/product';
import ProductSize from '@/types/productSize';
import CustomCounter from '@/components/CustomCounter/CustomCounter.vue';
import CustomPicker from '@/components/CustomPicker/CustomPicker.vue';

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  }
});
const counter = ref<Number>(1);
const onUpdateSize = (size:ProductSize):void => {
  console.log(size);
};
</script>

<style scoped>
</style>