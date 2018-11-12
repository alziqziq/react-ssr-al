import * as types from './types';
import { getMahasiswa } from '../../../models';

export const getMahasiswaAction = () => {
  return {
    types: [types.LOAD_MAHASISWA, types.LOAD_MAHASISWA_SUCCESS, types.LOAD_MAHASISWA_FAIL],
    promise: () =>
      getMahasiswa().then(res => {
        return res || {};
      })
  };
};