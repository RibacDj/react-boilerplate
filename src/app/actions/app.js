export const ADD_NUMBER = 'ADD_NUMBER';
export const INCREMENT = 'INCREMENT';
export const GET_DATA = 'GET_DATA';

export const increment = () => ({
  type: INCREMENT
});

export const addNumber = number => ({
  type: ADD_NUMBER,
  payload: number
});

export const getData = () => ({
  type: GET_DATA
});
