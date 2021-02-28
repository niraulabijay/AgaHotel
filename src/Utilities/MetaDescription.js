import React from "react";
import { Helmet } from "react-helmet";

function MetaDescription({ title, description, keyword }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content={keyword} />
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default MetaDescription;
