import useUrlBackendPaths from '@/composibles/useUrlBackendPaths';
import Api from '@/api/api';
import AuthFormType from '@/types/authFormType';
import UserInfo from '@/types/userInfo';
import UserPassword from '@/types/userPassword';

const userPathUrl = useUrlBackendPaths.user;

export const getIsUserAuthFromApi = () => {
  const path = `${userPathUrl}/auth`;
  return Api.request('get', path);
};

export const loginUserFromApi = (fomData: AuthFormType) => {
  const path = `${userPathUrl}/login`;
  return Api.request('post', path, fomData);
};

export const userApiLogout = () => {
  Api.removeToken();
};

export const registrationUserFromApi = (fomData: AuthFormType) => {
  const path = `${userPathUrl}/registration`;
  return Api.request('post', path, fomData);
};

export const getUserInfoFromApi = () => {
  const path = `${userPathUrl}/info`;
  return Api.request('get', path);
};

export const updateUserInfoFromApi = (fomData: UserInfo) => {
  const path = `${userPathUrl}/info`;
  return Api.request('post', path, fomData);
};

export const updateUserPasswordFromApi = (fomData: UserPassword) => {
  const path = `${userPathUrl}/password`;
  return Api.request('post', path, fomData);
};

export const updateToken = (token: string) => {
  Api.updateToken(token);
};
