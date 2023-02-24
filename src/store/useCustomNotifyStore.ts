import { defineStore } from 'pinia';
import { computed, Ref, ref } from 'vue';
import CustomNotify from '@/types/notify/customNotify';
import CustomNotifyType from '@/types/notify/customNotifyType';

export const useCustomNotifyStore = defineStore('notify-store', () => {
  const notifies = ref<Ref<CustomNotify>[]>([]);

  const getNotifies = computed((): Ref<CustomNotify>[] => notifies.value);

  const addNotify = (text: string, type?: CustomNotifyType) => {
    const notify = ref<CustomNotify>({
      id: Number(Date.now()),
      model: true,
      text,
      type: type ?? 'Common',
    });

    notifies.value.push(notify);
  };

  const removeNotify = async (id: number) => {
    notifies.value = notifies.value.filter((item) => item.value.id !== id);
  };

  return {
    getNotifies,
    addNotify,
    removeNotify,
  };
});
