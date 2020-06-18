import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { State } from "../types";

const persistConfig = {
  key: "root",
  storage,
};

function reduce(state: State = {}, action: any) {
  switch (action.type) {
    case "USER_TOKEN":
      return { ...state, token: action.token };
    case "CLEAR_TOKEN":
      return { ...state, token: undefined };
    case "CONTENT":
      const content = state.content || {};
      content[action.section] = action.content;
      return { ...state, content };
    default:
      return state;
  }
}

const persistedReducer = persistReducer(persistConfig, reduce);

let store = createStore(persistedReducer);
let persistor = persistStore(store);
export default { store, persistor };
