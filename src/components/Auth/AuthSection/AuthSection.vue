<template>
  <v-card
    class="mx-auto px-6 py-8"
    max-width="600"
    min-width="400"
  >
    <auth-form
      v-if="isCurrentFormAuth"
      :pending="userStore.getPending.auth"
      @auth="onAuth"
    />
    <registration-form
      v-if="!isCurrentFormAuth"
      :pending="userStore.getPending.auth"
      @registration="onRegistration"
    />

    <v-btn
      v-if="isCurrentFormAuth"
      block
      variant="text"
      class="mt-4"
      @click="onSwitchAuthType(false)"
    >
      Not registered yet?
    </v-btn>
    <v-btn
      v-if="!isCurrentFormAuth"
      block
      variant="text"
      class="mt-4"
      @click="onSwitchAuthType(true)"
    >
      Already have an account?
    </v-btn>
  </v-card>
</template>
<script setup lang='ts'>
import AuthForm from '@/components/Auth/AuthForm/AuthForm.vue';
import AuthFormType from '@/types/authFormType';
import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue';
import RegistrationFormType from '@/types/registrationFormType';
import { ref } from 'vue';
import { useUserStore } from '@/store/useUserStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();
const isCurrentFormAuth = ref<boolean>(true);

const onSwitchAuthType = (isNewFormAuth:boolean):void => {
  isCurrentFormAuth.value = isNewFormAuth;
};

const onRegistration = async (formData:RegistrationFormType) => {
  await userStore.registration(formData);

  if (userStore.getIsUserAuth) {
    await router.push({ name: 'Profile' });
  }
};

const onAuth = async (formData:AuthFormType) => {
  await userStore.login(formData);

  if (userStore.getIsUserAuth) {
    await router.push({ name: 'Profile' });
  }
};
</script>

<style scoped>
</style>
