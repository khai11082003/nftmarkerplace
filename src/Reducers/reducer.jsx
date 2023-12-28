import appReducer from "./appReducer";
import newReducer from "./newReducer";
export default function rootReducer(state = {}, action) {
    return {
        list: appReducer(state.list,action),
        new: newReducer(state.new,action)
    }
  }
