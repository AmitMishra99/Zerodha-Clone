const Hero = () => {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-dark m-0">Support Portal</h2>
          <button
            className="btn btn-primary px-4 py-2"
            style={{ backgroundColor: "#4a90e2", border: "none" }}
          >
            My tickets
          </button>
        </div>

        <div className="input-group shadow-sm">
          <span className="input-group-text bg-white border-end-0 py-3 ps-4">
            <i className="bi bi-search text-muted"></i>
          </span>
          <input
            type="text"
            className="form-control border-start-0 py-3"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;