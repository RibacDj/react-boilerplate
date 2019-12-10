import { Map } from 'immutable';

import { ADD_NUMBER, INCREMENT } from '../actions/app';

const initialState = Map({
  number: 0
});

const actionsMap = {
  [ADD_NUMBER]: (state, action) => {
    return state.merge(
      Map({
        number: state.get('number') + action.payload
      })
    );
  },
  [INCREMENT]: state => {
    return state.merge(
      Map({
        number: state.get('number') + 1
      })
    );
  }
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
