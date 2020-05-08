import React from "react";

import { useParams } from "react-router-dom";

const Pages = () => {
  let { topicId } = useParams();
  return <h3>{topicId}</h3>;
};

export default Pages;
