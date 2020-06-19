import React, { useCallback, useState } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import config from "../config.json";
import { storeToken, clearToken } from "../redux/actions";
import AuthedRoute from "../components/AuthedRoute";
import { State } from "../types";

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [updatePending, setUpdatePending] = useState(false);

  const token = useSelector((state: State) => state.token);
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const handleUsernameChanged = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const handlePasswordChanged = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const handleLogin = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      axios
        .post(config.API_SERVER_URL + "/admin/login", {
          username: username,
          password: password,
        })
        .then(function (response) {
          dispatch(storeToken(response.data.token));
        })
        .catch(function (error) {
          console.log(error);
        });
      event.preventDefault();
    },
    [dispatch, username, password]
  );

  const handleUpdate = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      const axiosConfig = {
        headers: { Authorization: `Bearer ${token}` },
      };
      setUpdatePending(true);
      axios
        .post(config.API_SERVER_URL + "/admin/update", {}, axiosConfig)
        .then(function (response) {
          setUpdatePending(false);
        })
        .catch(function (error) {
          console.log(error.response);
          if (error.response.status >= 400 && error.response.status < 500) {
            dispatch(clearToken());
          }
        });
      event.preventDefault();
    },
    [dispatch, token, setUpdatePending]
  );

  const { path, url } = match;
  const loginRedirect = `${path}/login`;
  return (
    <Switch>
      <AuthedRoute exact path={`${path}`} redirect={loginRedirect}>
        <div className="jumbotron jumbotron-fluid bg-dark mt-3 pl-5 pr-5 shadow-sm rounded">
          <form onSubmit={handleUpdate}>
            <div>
              <input
                type="submit"
                value={updatePending ? "Updating..." : "Update"}
                disabled={updatePending}
              />
            </div>
          </form>
        </div>
      </AuthedRoute>
      <Route path={`${path}/login`}>
        {token ? (
          <Redirect to={`${path}/`} />
        ) : (
          <form onSubmit={handleLogin}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChanged}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChanged}
              />
            </div>
            <div>
              <input type="submit" value="Log In" />
            </div>
          </form>
        )}
      </Route>
    </Switch>
  );
}
