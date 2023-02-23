<template>
  <v-app-bar
    :flat="true"
    :absolute="false"
    class="position-relative"
  >
    <v-container>
      <v-row class="justify-space-between align-center">
        <v-col
          cols="auto"
          lg="4"
        >
          <v-btn
            class="ma-2 text-h5"
            variant="text"
            icon="mdi-alpha-n-box"
            color="primary"
            to="/"
          />
        </v-col>
        <v-col
          lg="4"
          class="d-none d-lg-block text-center"
          cols="auto"
        >
          <v-btn
            to="/catalog"
            class="mr-2"
          >
            Catalog
          </v-btn>
          <v-btn
            to="info"
            class="mr-2"
          >
            Info
          </v-btn>
        </v-col>
        <v-col
          lg="4"
          class="text-right"
          cols="auto"
        >
          <v-btn
            variant="text"
            class="d-none d-lg-inline-flex"
            @click="onClickCart"
          >
            <v-badge
              v-if="cartStore.getProducts.length"
              color="error"
              :content="cartStore.getProducts.length"
            >
              <v-icon
                icon="mdi-cart-outline"
                size="large"
              />
            </v-badge>
            <v-icon
              v-else
              icon="mdi-cart-outline"
              size="large"
            />
          </v-btn>

          <v-btn
            variant="text"
            class="d-none d-lg-inline-flex"
            @click="onClickFavorites"
          >
            <v-badge
              v-if="cartStore.getProducts.length"
              :content="cartStore.getProducts.length"
              color="error"
            >
              <v-icon
                icon="mdi-heart"
                size="large"
              />
            </v-badge>
            <v-icon
              v-else
              icon="mdi-heart"
              size="large"
            />
          </v-btn>

          <v-btn
            to="profile"
            icon="mdi-account"
            variant="text"
            size="large"
            class="d-none d-lg-inline-flex"
          />
          <v-app-bar-nav-icon
            class="d-lg-none"
            @click="onClickMenu"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useDialogsStore } from '@/store/useDialogsStore';
import { useUserStore } from '@/store/useUserStore';
import { useRouter } from 'vue-router';
import { useCustomNotifyStore } from '@/store/useCustomNotifyStore';
import { useCartStore } from '@/store/useCartStore';

const dialogsStore = useDialogsStore();
const userStore = useUserStore();
const router = useRouter();
const notifyStore = useCustomNotifyStore();
const cartStore = useCartStore();

const onClickFavorites = () => {
  if (userStore.getIsUserAuth) {
    dialogsStore.toggleModal('favorites');
    return;
  }
  router.push({ name: 'Auth' });
  notifyStore.addNotify('You need to be Authorized', 'Error');
};
const onClickCart = () => {
  if (userStore.getIsUserAuth) {
    dialogsStore.toggleModal('cart');
    return;
  }
  router.push({ name: 'Auth' });
  notifyStore.addNotify('You need to be Authorized', 'Error');
};

const onClickMenu = () => {
  dialogsStore.toggleModal('menu');
};
</script>
