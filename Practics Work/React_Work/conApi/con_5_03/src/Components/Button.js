import React, { useContext } from "react";
import { MyContext } from "../App";

export const Button = () => {
  const data = useContext(MyContext);
  return <div style={{ backgroundColor: data.color }}> Button</div>;
};