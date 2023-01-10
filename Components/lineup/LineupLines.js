import React from "react";
import { useState } from "react";

function LineupLines(props) {
  const [modalInfo, setModal] = useState(false);
  return <li onClick={() => setModal(true)}>{props.name}</li>;
}
export default LineupLines;
