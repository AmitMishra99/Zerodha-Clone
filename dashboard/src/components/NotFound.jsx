import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-secondary">404</h1>

        <h3 className="mb-3">Page Not Found</h3>

        <p className="text-muted mb-4">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link to="/" className="btn btn-primary px-4">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
