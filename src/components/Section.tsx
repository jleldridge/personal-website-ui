import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import config from "../config.json";
import { State } from "../types";
import { storeContent } from "../redux/actions";
import ReactMarkdown from "react-markdown";
import "./markdownStyle.scss";

type Props = {
  sectionName: string;
};

export default function Section(props: Props) {
  const content = useSelector(
    (state: State) => state.content && state.content[props.sectionName]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(config.API_SERVER_URL + `/content/${props.sectionName}`)
      .then(function (response) {
        dispatch(storeContent(props.sectionName, response.data));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [props.sectionName]);

  return (
    <div className="mdcontainer">
      <ReactMarkdown source={content} />
    </div>
  );
}
