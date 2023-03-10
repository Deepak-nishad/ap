import React, { useContext } from "react";
import { MyContext } from "../App";

const UserDetails = () => {
  const data = useContext(MyContext);
  return <div>My Name is: {data.name}</div>;
};

export default UserDetails;