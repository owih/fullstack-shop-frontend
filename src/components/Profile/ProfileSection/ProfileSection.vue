<template>
  <v-form
    v-model="form"
    class="w-100"
    @submit.prevent="onSubmit"
  >
    <v-text-field
      v-model="formData.name"
      class="mb-2"
      variant="outlined"
      :rules="[rules.required]"
      label="Full Name"
      placeholder="Dmitry Dmitryevich"
      required
    />
    <v-text-field
      v-model="formData.address"
      class="mb-2"
      variant="outlined"
      :rules="[rules.address]"
      label="Address Line"
      placeholder="Snowy Rock Pl"
      counter="25"
      required
    />
    <v-text-field
      v-model="formData.city"
      class="mb-2"
      variant="outlined"
      :rules="[rules.required]"
      label="City"
      placeholder="Moscow"
      required
    />
    <v-autocomplete
      v-model="formData.country"
      class="mb-2"
      variant="outlined"
      :rules="[rules.required]"
      :items="countriesList"
      label="Country"
      placeholder="Select..."
      required
    />
    <v-btn
      color="primary"
      variant="elevated"
      type="submit"
      :disabled="!form"
    >
      Update
    </v-btn>
  </v-form>
</template>

<script setup lang='ts'>
import countriesList from '@/composibles/countriesList';
import { reactive, ref } from 'vue';

const form = ref();
const formData = reactive({
  name: '',
  address: '',
  country: '',
  city: '',
});
const onSubmit = ():void => {
  console.log(formData);
};
const rules = {
  required: (value:string) => !!value || 'Required.',
  address: () => !!formData.address && formData.address.length <= 25 || 'Address must be less than 25 characters',
};
</script>

<style scoped>
</style>
