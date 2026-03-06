import React from "react";

const Pricing = () => {
  return (
    <div className="container mb-5">
      <div className="row mb-5">
        <div className="col-5">
          <h1 className="fs-2 text-info-emphasis">Unbeatable pricing</h1>
          <p className="mt-4 fs-5 text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            className="link-opacity-100 fs-5  "
            href="#"
            style={{ textDecoration: "None" }}
          >
            See Pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-7">
          <img
            className="w-80"
            src="images/pricingEquity.png"
            alt="pricing-Equity"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
