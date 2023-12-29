import init from "../data"
import { INCREMENT,DECREMENT,BUY, SELECTNFT, REMOVE } from "../action"
function incre(state,id) {
  const newState =  (state).map((data) => {
    return data.id !== id ? data : {...data,quality: data.quality + 1}
  });
  return newState
}
function remove(state,id){
  const newState = state.map((data) => data.id !== id ? data : {...data,Buy: false})
  return newState


}
function decre(state,id) {
  const newState = (state).map((data) => {
    return data.id !== id ? data : {...data,quality: data.quality - 1}
  })
  return newState
}
function buy(state,id){
  const newState = state.map((data) => {
    return data.id !== id ? data : {...data,Buy: true}
  })
  console.log(newState);
  return newState
}
export default function appReducer(state = init.product || [], action) {
    switch (action.type) {
      case INCREMENT: 
      return incre(state,action.payload);
      case DECREMENT:
        return decre(state,action.payload);
      case BUY:
        return buy(state, action.payload);
      case REMOVE:
        return remove(state,action.payload);
      default:
        return state
    }
  }
