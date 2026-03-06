import React from "react";

const LeftSection = ({
  imgURL,
  prdtName,
  prdtDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-8">
          <img style={{ width: "70%" }} src={imgURL} alt="kite.png" />
        </div>
        <div className="col-4">
          <h1 className="fs-3 my-4 text-info-emphasis mt-5">{prdtName}</h1>
          <p
            style={{ width: "95%", lineHeight: "30px" }}
            className="text-muted my-4 fs-5"
          >
            {prdtDescription}
          </p>
          <div className="mb-4">
            <a
              className="link-opacity-100 "
              style={{ textDecoration: "None", marginRight: "2.5rem" }}
              href="#"
            >
              {tryDemo} <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              className="link-opacity-100"
              style={{ textDecoration: "None" }}
              href="#"
            >
              {learnMore} <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div>
            <img style={{ marginRight: "1.5rem" }} src={googlePlay} alt="" />
            <img src={appStore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
