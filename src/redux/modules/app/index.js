import * as types from './types';

const initialState = {};

const ACTION_HANDLERS = {
  
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
