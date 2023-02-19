import { defineStore } from 'pinia';
import { computed, Ref, ref } from 'vue';
import CustomNotify from '@/types/customNotify';
import CustomNotifyType from '@/types/customNotifyType';

export const useCustomNotifyStore = defineStore('notify-store', () => {
  const notifies = ref<Ref<CustomNotify>[]>([]);

  const getNotifies = computed((): Ref<CustomNotify>[] => notifies.value);

  const addNotify = (text: string, type?: CustomNotifyType) => {
    console.log('ADD');
    const notify = ref<CustomNotify>({
      id: Number(Date.now()),
      model: true,
      text,
      type: type ?? 'Common',
    });

    notifies.value.push(notify);
    console.log(notifies.value);
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
