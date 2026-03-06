const Varasity = () => {
  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div className="col-6">
          <img className="w-60 mb-5" src="images/education.svg" alt="" />
        </div>
        <div className="col-6 mt-5">
          <h1 className="fs-3 text-info-emphasis py-2">
            Free and open market education
          </h1>
          <p className="text-muted fs-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            className="link-opacity-100 fs-6  "
            href="#"
            style={{ textDecoration: "None" }}
          >
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>
          <p className="text-muted py-2 fs-5 mt-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            className="link-opacity-100 fs-6 "
            href="#"
            style={{ textDecoration: "None" }}
          >
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Varasity;
