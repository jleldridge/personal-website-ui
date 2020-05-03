import { createStore } from "redux";

function reduce(state = {}, action) {
  switch (action.type) {
    case "USER_TOKEN":
      return { ...state, token: action.token };
    default:
      return state;
  }
}

let store = createStore(reduce);

export default store;
