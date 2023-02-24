<template>
  <v-form
    ref="formRef"
    @submit.prevent="onSubmit"
  >
    <v-row align="center">
      <v-col
        cols="12"
        md="4"
        xl="3"
      >
        <v-text-field
          v-model="name"
          variant="outlined"
          hide-details
          label="Name"
          :disabled="disabled"
        />
      </v-col>
      <v-col
        cols="12"
        md="4"
        xl="3"
      >
        <v-select
          v-model="type"
          label="Category"
          variant="outlined"
          :disabled="disabled"
          hide-details
          :items="['Animal', 'Shoes', 'Car', 'Food']"
        />
      </v-col>
      <v-col cols="auto">
        <v-btn
          size="large"
          icon="mdi-magnify"
          type="submit"
          :disabled="disabled || (!name && !type)"
        />
      </v-col>
      <v-col cols="auto">
        <v-btn
          size="large"
          icon="mdi-close"
          :disabled="disabled || (!name && !type)"
          @click="onClear"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang='ts'>
import { PropType, ref } from 'vue';
import ProductFilter from '@/types/product/productFilter';

defineProps({
  disabled: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false,
  }
});
const emits = defineEmits<{
  (e: 'submitFilter', value: ProductFilter):void,
  (e: 'clearFilter'):void,
  (e: 'update:modelValue', value: ProductFilter):void
}>();

const formRef = ref();
const name = ref<string>('');
const type = ref<string>('');

const onSubmit = () => {
  emits('submitFilter', { name: name.value, type: type.value });
};
const onClear = () => {
  formRef.value.reset();
  emits('clearFilter');
};
</script>
