import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  content: string;
};

export default function Page(props: Props) {
  console.log(props);
  return (
    <div style={{ color: "white" }}>
      <ReactMarkdown source={props.content} />
    </div>
  );
}
