import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';
import { useCustomNotifyStore } from '@/store/useCustomNotifyStore';
import {
  getIsUserAuthFromApi,
  getUserInfoFromApi,
  loginUserFromApi,
  registrationUserFromApi,
  updateToken,
  updateUserInfoFromApi, updateUserPasswordFromApi, userApiLogout
} from '@/api/useUserApi';
import AuthFormType from '@/types/auth/authFormType';
import UserInfo from '@/types/user/userInfo';
import UserPassword from '@/types/user/userPassword';

export const useUserStore = defineStore('user-store', () => {
  const userInfo = ref<UserInfo>({});
  const isUserAuth = ref<boolean>(false);
  const isUserWasRequested = ref<boolean>(false);
  const pending = reactive({
    auth: false,
    user: false,
    info: false,
    update: false,
    password: false,
    requested: false,
  });

  const customNotifyStore = useCustomNotifyStore();

  const getUserInfo = computed((): UserInfo => userInfo.value);
  const getIsUserAuth = computed(():boolean => isUserAuth.value);
  const getIsUserWasRequested = computed(():boolean => isUserWasRequested.value);
  const getPending = computed(() => pending);


  const logout = async () => {
    userApiLogout();
    isUserAuth.value = false;
  };

  const getIsUserAuthToStore = async () => {
    try {
      isUserWasRequested.value = true;
      pending.user = true;
      const  { data } = await getIsUserAuthFromApi();
      if (data.token) {
        updateToken(data.token);
        isUserAuth.value = true;
      } else {
        isUserAuth.value = false;
      }

      pending.user = false;
      customNotifyStore.addNotify('Welcome back!', 'Success');
    } catch (e) {
      isUserAuth.value = false;
      pending.user = false;
      customNotifyStore.addNotify('Unauthorized', 'Error');
    }
  };

  const login = async (formData: AuthFormType) => {
    try {
      pending.auth = true;
      const  { data } = await loginUserFromApi(formData);

      if (data.token) {
        updateToken(data.token);
        isUserAuth.value = true;
      } else {
        isUserAuth.value = false;
      }

      pending.auth = false;
      customNotifyStore.addNotify('Welcome!', 'Success');
    } catch (e) {
      pending.auth = false;
      customNotifyStore.addNotify('Something went wrong!', 'Error');
    }
  };

  const registration = async (formData: AuthFormType) => {
    try {
      pending.auth = true;
      const  { data } = await registrationUserFromApi(formData);

      if (data.token) {
        updateToken(data.token);
        isUserAuth.value = true;
      } else {
        isUserAuth.value = false;
      }

      pending.auth = false;
      customNotifyStore.addNotify('Welcome!', 'Success');
    } catch (e) {
      pending.auth = false;
      customNotifyStore.addNotify('Something went wrong!', 'Error');
    }
  };

  const updateUserInfoFromApiToStore = async (formData: UserInfo) => {
    try {
      pending.update = true;

      const  { data } = await updateUserInfoFromApi(formData);
      userInfo.value = data.userInfo as UserInfo;

      if (data.token) {
        updateToken(data.token);
      }

      pending.update = false;
      customNotifyStore.addNotify('User info was updated!', 'Success');
    } catch (e) {
      pending.update = false;
      customNotifyStore.addNotify('Something went wrong!', 'Error');
    }
  };

  const getUserInfoFromApiToStore = async () => {
    try {
      pending.info = true;

      const  { data } = await getUserInfoFromApi();
      userInfo.value = data.userInfo as UserInfo;

      pending.info = false;
      customNotifyStore.addNotify('Successfully loaded user info!', 'Success');
    } catch (e) {
      pending.info = false;
      customNotifyStore.addNotify('Something went wrong!', 'Error');
    }
  };

  const updateUserPasswordFromApiToStore = async (formData: UserPassword) => {
    try {
      pending.update = true;

      const  { data } = await updateUserPasswordFromApi(formData);

      if (data.token) {
        updateToken(data.token);
      }

      pending.update = false;
      customNotifyStore.addNotify('Welcome!', 'Success');
    } catch (e) {
      pending.update = false;
      customNotifyStore.addNotify('Something went wrong!', 'Error');
    }
  };

  return {
    getIsUserAuth,
    getPending,
    getIsUserWasRequested,
    getUserInfo,
    getIsUserAuthToStore,
    login,
    logout,
    registration,
    updateUserInfoFromApiToStore,
    getUserInfoFromApiToStore,
    updateUserPasswordFromApiToStore,
  };
});
