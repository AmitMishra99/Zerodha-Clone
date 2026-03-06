import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  return (
    <footer className="container bg-white border-top">
      <div className="container py-5">
        <div className="row">
          {/* Logo & social */}
          <div className="col-md-3 mb-4">
            <img
              src="images/logo.svg"
              alt="Zerodha"
              className="img-fluid mb-3"
              style={{ width: "160px" }}
            />
            <p className="text-muted small">
              © 2010 - 2024, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="d-flex gap-3 mt-3 text-muted">
              <TwitterIcon />
              <FacebookIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>

            <div className="d-flex gap-3 mt-3 text-muted">
              <YouTubeIcon />
              <WhatsAppIcon />
              <TelegramIcon />
            </div>
          </div>

          {/* Account */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-semibold mb-3">Account</h6>
            <ul className="list-unstyled text-muted small">
              <li>Open demat account</li>
              <li>Minor demat account</li>
              <li>NRI demat account</li>
              <li>Commodity</li>
              <li>Dematerialisation</li>
              <li>Fund transfer</li>
              <li>MTF</li>
              <li>Referral program</li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled text-muted small">
              <li>Contact us</li>
              <li>Support portal</li>
              <li>How to file a complaint?</li>
              <li>Status of your complaints</li>
              <li>Bulletin</li>
              <li>Circular</li>
              <li>Z-Connect blog</li>
              <li>Downloads</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-2 mb-4 ">
            <h6 className="fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled text-muted small  ">
              <li>About</li>
              <li>Philosophy</li>
              <li>Press & media</li>
              <li>Careers</li>
              <li>Zerodha Cares (CSR)</li>
              <li>Zerodha.tech</li>
              <li>Open source</li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold mb-3">Quick links</h6>
            <ul className="list-unstyled text-muted small ">
              <li>Upcoming IPOs</li>
              <li>Brokerage charges</li>
              <li>Market holidays</li>
              <li>Economic calendar</li>
              <li>Calculators</li>
              <li>Markets</li>
              <li>Sectors</li>
            </ul>
          </div>
        </div>

        {/* Legal text */}
        <div className="mt-4 text-muted" style={{ fontSize: "11px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.:
            INZ000031633. Depository services through Zerodha Broking Ltd. – SEBI
            Registration no.: IN-DP-431-2019.
          </p>
          <p>
            Investments in securities market are subject to market risks; read all
            the related documents carefully before investing.
          </p>
        </div>

        {/* Bottom links */}
        <div className="d-flex flex-wrap gap-3 pt-3 border-top small text-muted justify-content-center">
          <span>NSE</span>
          <span>BSE</span>
          <span>MCX</span>
          <span>Terms & conditions</span>
          <span>Policies & procedures</span>
          <span>Privacy policy</span>
          <span>Disclosure</span>
          <span>Investor charter</span>
        </div>
      </div>
    </footer>
  );
}
