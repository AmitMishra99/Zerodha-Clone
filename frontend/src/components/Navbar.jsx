import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row px-4 py-3 border-bottom">
        <div className="col">
          <img
            onClick={handleNavigate}
            style={{ width: "140px" }}
            src="images/logo.svg"
            alt="logo.svg"
          />
        </div>
        <div className="col">
          <div className="text-info-emphasis d-flex gap-5">
            <Link
              className="text-info-emphasis"
              style={{ textDecoration: "none" }}
              to="/signup"
            >
              Signup
            </Link>
            <Link
              className="text-info-emphasis"
              style={{ textDecoration: "none" }}
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-info-emphasis"
              style={{ textDecoration: "none" }}
              to="/products"
            >
              Products
            </Link>
            <Link
              className="text-info-emphasis"
              style={{ textDecoration: "none" }}
              to="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-info-emphasis"
              style={{ textDecoration: "none" }}
              to="/support"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
