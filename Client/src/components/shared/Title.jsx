import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "ChatTo - Chat To the world",
  description = "Chat App called ChatTo",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
