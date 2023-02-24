<template>
  <v-form
    v-model="form"
    @submit.prevent="onSubmit"
  >
    <v-text-field
      v-model="formData.email"
      :readonly="loading"
      :rules="[rules.email]"
      variant="outlined"
      class="mb-3"
      clearable
      label="Email"
    />

    <v-text-field
      v-model="formData.name"
      :readonly="loading"
      :rules="[rules.name]"
      variant="outlined"
      class="mb-3"
      clearable
      label="Name"
      placeholder="Enter your password"
    />

    <v-text-field
      v-model="formData.password"
      :readonly="loading"
      :rules="[rules.password]"
      variant="outlined"
      clearable
      label="Password"
      type="password"
      placeholder="Enter your password"
    />

    <br>

    <v-btn
      :disabled="!form"
      :loading="props.pending"
      block
      color="success"
      size="large"
      type="submit"
      variant="elevated"
    >
      Sign Up
    </v-btn>
  </v-form>
</template>

<script setup lang='ts'>
import { PropType, reactive, ref } from 'vue';
import RegistrationFormType from '@/types/auth/registrationFormType';

const props = defineProps({
  pending: {
    type: Boolean as PropType<boolean>,
    required: true,
  }
});
const emits = defineEmits<{(e: 'registration', value: RegistrationFormType):void}>();

const form = ref<boolean>(false);
const loading = ref<boolean>(false);

const formData = reactive<RegistrationFormType>({
  email: '',
  name: '',
  password: '',
});

const rules = {
  name: (value:string) => value.length > 1 || 'Minimum 2 characters.',
  password: (value:string) => value.length > 5 || 'Minimum 6 characters.',
  email: (value:string) => {
    const pattern:RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'Invalid e-mail.';
  }
};
const onSubmit = ():void => {
  emits('registration', formData);
};
</script>

<style scoped>
</style>
