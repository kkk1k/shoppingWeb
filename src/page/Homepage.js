import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();
  const goToHompage = () => {
    navigate("/product?q=pants");
  };
  return (
    <div>
      Homepage
      <br />
      <Link to="/about">Go to about page</Link>
      <br />
      <button onClick={goToHompage}>goto Product page</button>
    </div>
  );
};

export default Homepage;
