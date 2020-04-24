import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { unregister } from "./registerServiceWorker";

import "bootstrap/dist/js/bootstrap.min.js";
import "./App.scss";

ReactDOM.render(<App />, document.getElementById("root"));
// this tries to make the app "offline first" by serving cached pages when possible
// but this also seems to supercede the routing system in express if this app is
// loaded first, so we're leaving this out unless we can find a way for it to play nice.
// registerServiceWorker();
unregister();
