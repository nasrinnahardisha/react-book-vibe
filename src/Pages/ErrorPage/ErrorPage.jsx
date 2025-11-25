import React from "react";
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div className="container">
      <div className=" flex gap-6 min-h-full justify-center items-center">
        <p>this is error page</p>
        <NavLink to="/" className="btn">
          Go to Home
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
