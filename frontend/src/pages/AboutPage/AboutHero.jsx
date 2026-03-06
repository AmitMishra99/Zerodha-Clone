const AboutHero = () => {
  return (
    <div className="container">
      <div className="row p-5 mx-auto m-5 justify-content-center w-50 ">
        <h1 className=" text-center fs-4 text-info-emphasis">
          We pioneered the discount broking model in India. Now, we are ground
          with our technology.
        </h1>
      </div>
      <div className="row mx-auto">
        <div style={{ width: "40%" }} className="col-6 m-5 fs-5 text-secondary">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div style={{ width: "40%" }} className="col-6 m-5 fs-5 text-secondary">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
