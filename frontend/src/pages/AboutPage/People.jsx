import React from "react";

const People = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center fs-2 text-info-emphasis mb-5">People</h1>

      <div className="row justify-content-center align-items-center">
        {/* Left Section */}
        <div className="col-md-4 text-center mb-1">
          <img
            src="images/nithinKamath.jpg"
            alt="Profile_img"
            className="rounded-circle mb-3"
            style={{ width: "250px" }}
          />
          <h1 className="fs-5">Nithin Kamath</h1>
          <p className="text-muted">Founder, CEO</p>
        </div>

        {/* Right Section */}
        <div className="col-md-6 ">
          <p className="fs-5">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="fs-5">
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="fs-5">Playing basketball is his zen.</p>
          <p className="fs-5">
            Connect on Homepage / TradingQnA / Twitter
          </p>
        </div>
      </div>
    </div>
  );
};

export default People;
