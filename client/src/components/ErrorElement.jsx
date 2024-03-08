import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const errors = useRouteError();
  console.log(errors);
  return <h4>THERE WAS AN ERROR</h4>;
};

export default ErrorElement;
