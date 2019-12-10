import { Map } from 'immutable';

import { GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_ERROR } from '../actions/data';

const initialState = Map({
  loading: false,
  error: null,
  data: null
});

const actionsMap = {
  [GET_DATA_START]: (state, action) => {
    return state.merge(
      Map({
        loading: true,
        error: null
      })
    );
  },
  [GET_DATA_SUCCESS]: (state, action) => {
    return state.merge(
      Map({
        loading: false,
        error: null,
        data: action.data
      })
    );
  },
  [GET_DATA_ERROR]: (state, action) => {
    return state.merge(
      Map({
        loading: false,
        error: action.error
      })
    );
  }
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
