import init from "../data"
import { INCREMENT,DECREMENT, SELECTNFT } from "../action"
function incre(state,id) {
  const newState =  (state).map((data) => {
    return data.id !== id ? data : {...data,quality: data.quality + 1}
  });
  return newState
}
function decre(state,id) {
  const newState = (state).map((data) => {
    return data.id !== id ? data : {...data,quality: data.quality - 1}
  })
  return newState
}
export default function appReducer(state = init.product || [], action) {
    switch (action.type) {
      case INCREMENT: 
      return incre(state,action.payload);
      case DECREMENT:
        return decre(state,action.payload);
      default:
        return state
    }
  }
