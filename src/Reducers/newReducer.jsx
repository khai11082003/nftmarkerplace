import init from "../data"

export default function newReducer(state = init.News || [], action) {
    switch (action.type) {
      default:
        return state
    }
  }
