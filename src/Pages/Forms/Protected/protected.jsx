import { useNavigate } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
const Protected = (props) => {
  const { Component } = props;
const Navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("signin");
    if (!login) {
      Navigate("/login");
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
