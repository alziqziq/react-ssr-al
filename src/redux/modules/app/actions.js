import * as types from './types';

export const setLoading = bool => {
  return {
    type: types.SET_LOADING,
    bool
  };
};