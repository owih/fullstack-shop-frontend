import useUrlBackendPaths from '@/composibles/useUrlBackendPaths';
import Api from '@/api/api';
import AuthFormType from '@/types/authFormType';

const userPathUrl = useUrlBackendPaths.user;

export const getIsUserAuthFromApi = () => {
  const path = `${userPathUrl}/auth`;
  return Api.request('get', path);
};

export const loginUserFromApi = (fomData: AuthFormType) => {
  const path = `${userPathUrl}/login`;
  return Api.request('post', path, fomData);
};

export const updateToken = (token: string) => {
  Api.updateToken(token);
};
