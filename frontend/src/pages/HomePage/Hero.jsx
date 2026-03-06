const Hero = () => {
  return (
    <div className="container mb-5">
      <div className="row justify-content-center text-center py-5">
        <div className="col-8">
          <img src="images/homeHero.png" alt="hero" className="img-fluid" />

          <h1 className="mt-5 fs-3 text-secondary">Invest in everything</h1>

          <p className="fs-5 mt-3 ">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <button className="btn btn-primary btn-lg mt-4 px-5">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
