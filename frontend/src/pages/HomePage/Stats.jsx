const Stats = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="mt-5">
            <h1 className="mt-4 p-2 fs-3 text-info-emphasis">
              Trust with confidence
            </h1>
            <h3 className="p-2 fs-4 text-info-emphasis mt-4 ">
              Customer-first always
            </h3>
            <p className="p-2 text-muted fs-5 w-90">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>

            <h3 className="p-2 fs-4 text-info-emphasis">No spam or gimmicks</h3>
            <p className="p-2 text-muted fs-5 w-90">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>

            <h3 className="p-2 fs-4 text-info-emphasis">
              The Zerodha universe
            </h3>
            <p className="p-2 text-muted fs-5 w-90">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h3 className="p-2 fs-4 text-info-emphasis">
              Do better with money
            </h3>
            <p className="p-2 text-muted fs-5 w-90">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-7">
          <img
            className="w-100"
            src="images/ecosystem.png"
            alt="image_ecosystem.png"
          />
          <div className="text-center mt-2">
            <a
              className="link-opacity-100 m-3 fs-5"
              style={{ textDecoration: "None" }}
              href="#"
            >
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              className="link-opacity-100 m-3 fs-5 "
              href="#"
              style={{ textDecoration: "None" }}
            >
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="p-5 mb-5 mt-2 text-center ">
          <img className="w-90" src="images/pressLogos.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
