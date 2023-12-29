export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SELECTNFT = 'SELECTNFT';
export const REMOVE = 'REMOVE'
export const BUY = 'BUY'
// Action Creators
export const increment = (id) => ({
  type: INCREMENT,
  payload: id
});
export const remove = (id) => ({
  type: REMOVE,
  payload: id
});
export const selectNFT = (id) => ({
    type: SELECTNFT,
    payload: id
});
export const buy = (id) => ({
  type: BUY,
  payload: id
});

export const decrement = (id) => ({
  type: DECREMENT,
  payload: id
});