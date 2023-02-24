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
      v-model="formData.password"
      :readonly="loading"
      :rules="[rules.required]"
      variant="outlined"
      clearable
      label="Password"
      placeholder="Enter your password"
      type="password"
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
      Sign In
    </v-btn>
  </v-form>
</template>

<script setup lang='ts'>
import { PropType, reactive, ref } from 'vue';
import AuthFormType from '@/types/auth/authFormType';

const props = defineProps({
  pending: {
    type: Boolean as PropType<boolean>,
    required: true,
  }
});
const emits = defineEmits<{(e: 'auth', value: AuthFormType):void}>();

const form = ref<boolean>(false);
const loading = ref<boolean>(false);

const formData = reactive<AuthFormType>({
  email: '',
  password: '',
});

const rules = {
  required: (value:string) => !!value || 'Required.',
  email: (value:string) => {
    const pattern:RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'Invalid e-mail.';
  }
};
const onSubmit = ():void => {
  emits('auth', formData);
};
</script>

<style scoped>
</style>
