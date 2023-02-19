<template>
  <div class="position-absolute flex-column mr-auto">
    <v-snackbar
      v-for="item in customNotifyStore.getNotifies"
      :key="item.value.id"
      v-model="item.value.model"
      transition="fade-transition"
      position="static"
      location="bottom left"
      :timeout="2000"
      location-strategy="connected"
      class="py-3"
      @update:modelValue="customNotifyStore.removeNotify(item.value.id)"
    >
      {{ item.value.text }}

      <template #actions>
        <v-btn
          :color="item.value.type === 'Common' ? 'grey' : item.value.type"
          variant="text"
          @click="customNotifyStore.removeNotify(item.value.id)"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { useCustomNotifyStore } from '@/store/useCustomNotifyStore';

const customNotifyStore = useCustomNotifyStore();
</script>

<style scoped>

</style>
