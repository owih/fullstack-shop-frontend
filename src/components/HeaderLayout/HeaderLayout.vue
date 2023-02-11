<template>
  <v-app-bar
    :flat="true"
  >
    <template #title>
      <v-btn
        class="ma-2 text-h5"
        variant="text"
        icon="mdi-alpha-n-box"
        color="primary"
        to="/"
      />
    </template>

    <div class="d-none d-lg-block">
      <v-btn
        to="/catalog"
        class="mr-2"
      >
        Catalog
      </v-btn>
      <v-btn
        to="profile"
        class="mr-2"
      >
        Profile
      </v-btn>
      <v-btn
        to="info"
        class="mr-2"
      >
        Info
      </v-btn>

      <v-btn
        to="info"
      >
        Cart
      </v-btn>
    </div>

    <v-spacer />

    <v-app-bar-nav-icon
      class="d-lg-none"
      @click="onClickMenu"
    />
    <v-btn
      class="ma-2"
      variant="text"
      icon="mdi-cart-outline"
      color=""
      @click="onClickCart"
    />
  </v-app-bar>
</template>

<script setup lang="ts">
import { useDialogsStore } from '@/store/useDialogsStore';

const dialogsStore = useDialogsStore();
const onClickCart = () => {
  dialogsStore.toggleModal('cart');
};

const onClickMenu = () => {
  dialogsStore.toggleModal('menu');
};
</script>
