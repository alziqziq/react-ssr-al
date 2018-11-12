import * as types from './types';

const initialState = {
  loading: false,
  loaded: false,
  data: {}
};

const ACTION_HANDLERS = {
  [types.LOAD_MAHASISWA]: (state) => {
    return {
      ...state,
      loading: true
    };
  },

  [types.LOAD_MAHASISWA_FAIL]: (state) => {
    return {
      ...state,
      loading: false,
      loaded: true
    };
  },

  [types.LOAD_MAHASISWA_SUCCESS]: (state, action) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      data: action.data
    };
  },
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
