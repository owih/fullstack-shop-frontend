<template>
  <v-form
    v-model="form"
    class="w-100"
    :disabled="pending"
    @submit.prevent="onSubmit"
  >
    <v-text-field
      v-model="formData.name"
      class="mb-2"
      variant="outlined"
      :rules="[rules.required]"
      label="Full Name"
      placeholder="Dmitry Dmitrievich"
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
      :items="useCountriesList"
      label="Country"
      placeholder="Select..."
      required
    />
    <v-row class="justify-space-between">
      <v-col cols="auto">
        <v-btn
          color="primary"
          variant="elevated"
          type="submit"
          :loading="pending"
          :disabled="!form || !isFormChanged"
        >
          Update
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          color="error"
          @click="onLogout"
        >
          Logout
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import { onMounted, PropType, reactive, ref, watch } from 'vue';
import UserInfo from '@/types/userInfo';
import useCountriesList from '@/composibles/useCountriesList';

const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    required: true,
  },
  pending: {
    type: Boolean as PropType<boolean>,
    required: true,
  }
});

const emits = defineEmits<{(e: 'onSubmit', value: UserInfo): void, (e: 'onLogout'): void}>();

const form = ref<boolean>();
const isFormChanged = ref<boolean>(false);

const formData = reactive<UserInfo>({
  name: '',
  address: '',
  country: '',
  city: '',
});

const onLogout = () => {
  emits('onLogout');
};

const rules = {
  required: (value:string) => !!value || 'Required.',
  address: () => !!formData.address && formData.address.length <= 25 || 'Address must be less than 25 characters',
};

const updateFormData = ():void => {
  formData.name = props.userInfo.name || '';
  formData.address = props.userInfo.address || '';
  formData.city = props.userInfo.city || '';
  formData.country = props.userInfo.country || '';
};

const onSubmit = ():void => {
  emits('onSubmit', formData);
};

watch(formData, () => {
  let countFields: number = 0;
  for (let key in formData) {
    if (key !== 'name' && key !== 'address' && key !== 'country' && key !== 'city') return;
    formData[key] !== props.userInfo[key] && countFields++;
  }
  isFormChanged.value = !!countFields;
});

// Updating formData with this way, for correct Vuetify form validation behavior
onMounted(() => {
  updateFormData();
});
</script>

<style scoped>

</style>
