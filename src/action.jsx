export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SELECTNFT = 'SELECTNFT'
// Action Creators
export const increment = (id) => ({
  type: INCREMENT,
  payload: id
});

export const selectNFT = (id) => ({
    type: SELECTNFT,
    payload: id
})

export const decrement = (id) => ({
  type: DECREMENT,
  payload: id
});