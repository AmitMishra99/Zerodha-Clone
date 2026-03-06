import React from "react";

const Universe = () => {
  return (
    <div className="container mb-5 mt-5 text-center ">
      <div className="row text-center ">
        <h1 className="text-info-emphasis fs-3">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row p-5 justify-content-center text-center ">
        <img
          style={{ width: "85%" }}
          src="images/products.png"
          alt=""
        />
      </div>
      <button className="btn btn-primary btn-lg mt-2 px-5 w-auto text-center">
        Sign up for free
      </button>
    </div>
  );
};

export default Universe;
