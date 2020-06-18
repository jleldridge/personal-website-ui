import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Page from "../components/Page";
import config from "../config.json";
import { State } from "../types";
import { storeHomeContent } from "../redux/actions";

type Props = {
  token?: string;
};

export default function Home(props: Props) {
  const content = useSelector((state: State) => state.homeContent);
  const dispatch = useDispatch();

  useEffect(() => {
    const axiosConfig = {
      headers: { Authorization: `Bearer ${props.token}` },
    };
    axios
      .get(config.API_SERVER_URL + "/content/home", axiosConfig)
      .then(function (response) {
        console.log(response);
        dispatch(storeHomeContent(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return <Page content={content} />;
}
