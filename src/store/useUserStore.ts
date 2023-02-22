import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useCustomNotifyStore } from '@/store/useCustomNotifyStore';
import { getIsUserAuthFromApi, loginUserFromApi, updateToken } from '@/api/useUserApi';
import AuthFormType from '@/types/authFormType';

export const useUserStore = defineStore('user-store', () => {
  const isUserAuth = ref<boolean>(false);
  const pending = ref<boolean>(false);

  const customNotifyStore = useCustomNotifyStore();

  const getIsUserAuth = computed(():boolean => isUserAuth.value);
  const getPending = computed(():boolean => pending.value);

  const getIsUserAuthToStore = async () => {
    try {
      pending.value = true;
      const  { data } = await getIsUserAuthFromApi();
      console.log(data);
      if (data.token) {
        console.log('update token');
        updateToken(data.token);
        isUserAuth.value = true;
      } else {
        isUserAuth.value = false;
      }

      pending.value = false;
      customNotifyStore.addNotify('Welcome back!', 'Success');
    } catch (e) {
      console.log('Not auth');
      isUserAuth.value = false;
      pending.value = false;
      customNotifyStore.addNotify('Not authorized', 'Error');
    }
  };

  const login = async (formData: AuthFormType) => {
    console.log(formData);
    const  { data } = await loginUserFromApi(formData);
    console.log(data);
  };

  return {
    getIsUserAuth,
    getPending,
    getIsUserAuthToStore,
    login,
  };
});
