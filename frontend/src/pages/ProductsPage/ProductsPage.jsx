import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductsPage = () => {
  return (
    <div className="container">
      <Hero />
      <LeftSection
        imgURL="images/kite.png"
        prdtName="Kite"
        prdtDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try Demo"
        learnMore="Learn more"
        googlePlay="images/googlePlayBadge.svg"
        appStore="images/appstoreBadge.svg"
      />
      <RightSection
        imgURL="images/console.png"
        prdtName="Console"
        prdtDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo="Learn more"
      />
      <LeftSection
        imgURL="images/coin.png"
        prdtName="Coin"
        prdtDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        learnMore="Learn more"
        googlePlay="images/googlePlayBadge.svg"
        appStore="images/appstoreBadge.svg"
      />
      <RightSection
        imgURL="images/kiteTrade.png"
        prdtName="Kite Connect API"
        prdtDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="Kite Connect  "
      />
      <LeftSection
        imgURL="images/varsity.png"
        prdtName="Varsity mobile"
        prdtDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="Try Demo"
        learnMore="Learn more"
        googlePlay="images/googlePlayBadge.svg"
        appStore="images/appstoreBadge.svg"
      />
      <p className="fs-4 mt-5 mb-5 text-center text-muted">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />
    </div>
  );
};

export default ProductsPage;
