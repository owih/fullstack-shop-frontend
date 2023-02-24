<template>
  <v-card
    variant="tonal"
    class="pa-3"
  >
    <v-btn
      class="remove"
      icon="mdi-close"
      variant="text"
      color="error"
      size="small"
      :loading="cartStore.getPendingProducts.includes(product.id)"
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
            :to="{ name: 'CatalogDetail', params: { id: props.product.id } }"
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
          <div :class="{'text-error font-weight-bold': props.product.count === props.product.stock }">
            {{ `Stock: ${props.product.stock}` }}
          </div>
        </v-card-subtitle>
        <v-card-item class="pa-0">
          <v-row class="justify-space-between align-center">
            <v-col cols="auto">
              <div
                v-if="!props.product.sale"
                class="text-h6"
              >
                {{ `$${props.product.price}` }}
              </div>
              <div v-else>
                <div class="d-flex align-center">
                  <span class="d-inline-block text-h6">
                    {{ `$${Math.floor(props.product.price - (props.product.price * props.product.sale / 100))}` }}
                  </span>
                  <del class="d-block text-grey ml-3">
                    {{ `$${props.product.price}` }}
                  </del>
                </div>
              </div>
            </v-col>
            <v-col cols="auto">
              <custom-counter
                :productId="props.product.id"
                :max="props.product.stock"
                class="justify-end"
              />
            </v-col>
          </v-row>
        </v-card-item>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';
import CartProduct from '@/types/product/cartProduct';
import CustomImageMock from '@/components/CustomImageMock/CustomImageMock.vue';
import { useCartStore } from '@/store/useCartStore';
import CustomCounter from '@/components/CustomCounter/CustomCounter.vue';
import { useDialogsStore } from '@/store/useDialogsStore';
import { useRoute } from 'vue-router';
import { useProductsStore } from '@/store/useProductsStore';

const props = defineProps({
  product: {
    type: Object as PropType<CartProduct>,
    required: true,
  }
});

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
const cartStore = useCartStore();
const dialogsStore = useDialogsStore();
const route = useRoute();
const productStore = useProductsStore();

const onRemove = () => {
  cartStore.deleteProductFromCart(props.product.id);
};
const onClickDetail = () => {
  dialogsStore.toggleModal('cart', false);
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
