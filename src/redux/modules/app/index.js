import * as types from './types';

const initialState = {
  loading: {
    loading: false
  }
};

const ACTION_HANDLERS = {
  [types.SET_LOADING]: (state, action) => {
    return {
      ...state,
      loading: action.bool
    };
  },
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
