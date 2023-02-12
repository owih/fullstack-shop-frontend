import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import Dialogs from '@/types/dialogs';

type DialogType = 'cart' | 'menu' | 'favorites'

export const useDialogsStore = defineStore('dialogs-store', () => {
  const dialogsIsOpenState = reactive<Dialogs>({
    cart: false,
    menu: false,
    favorites: false,
  });

  const getDialogsIsOpenStates = computed(():Dialogs => dialogsIsOpenState);

  const toggleModal = (name: DialogType, isOpen: boolean | null = null) => {
    console.log(dialogsIsOpenState);
    if (isOpen === null) {
      dialogsIsOpenState[name] = !dialogsIsOpenState[name];
      return;
    }

    if (dialogsIsOpenState[name] !== isOpen) {
      dialogsIsOpenState[name] = isOpen;
    }
  };

  return {
    getDialogsIsOpenStates,
    toggleModal,
  };
});
