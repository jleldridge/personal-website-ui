import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

function reduce(state = {}, action) {
  switch (action.type) {
    case "USER_TOKEN":
      return { ...state, token: action.token };
    case "CLEAR_TOKEN":
      return { ...state, token: undefined };
    case "HOME_CONTENT":
      return { ...state, homeContent: action.homeContent };
    default:
      return state;
  }
}

const persistedReducer = persistReducer(persistConfig, reduce);

let store = createStore(persistedReducer);
let persistor = persistStore(store);
export default { store, persistor };
