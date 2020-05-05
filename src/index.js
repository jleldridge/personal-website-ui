import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { unregister } from "./registerServiceWorker";
import store from "./redux/store";

import "bootstrap/dist/js/bootstrap.min.js";
import "./App.scss";

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
// this tries to make the app "offline first" by serving cached pages when possible
// but this also seems to supercede the routing system in express if this app is
// loaded first, so we're leaving this out unless we can find a way for it to play nice.
// registerServiceWorker();
unregister();
