const Accordian = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <div className="accordion" id="supportAccordion">
            <div className="accordion-item mb-3 border shadow-sm">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-white text-dark py-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc1"
                >
                  <i className="bi bi-plus-circle text-primary me-3"></i>{" "}
                  Account Opening
                </button>
              </h2>
              <div
                id="acc1"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body text-muted">
                  Help with online and offline account opening.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 border shadow-sm">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-white text-dark py-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc2"
                >
                  <i className="bi bi-person text-primary me-3"></i> Your
                  Zerodha Account
                </button>
              </h2>
              <div
                id="acc2"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body text-muted">
                  Manage your profile, password, and settings.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 border shadow-sm">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-white text-dark py-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc3"
                >
                  <i className="bi bi-compass text-primary me-3"></i> Kite
                </button>
              </h2>
              <div
                id="acc3"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body text-muted">
                  Trading platform features and troubleshooting.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 border shadow-sm">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-white text-dark py-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc4"
                >
                  <i className="bi bi-currency-rupee text-primary me-3"></i>{" "}
                  Funds
                </button>
              </h2>
              <div
                id="acc4"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body text-muted">
                  Adding funds, withdrawals, and margins.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 border shadow-sm">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-white text-dark py-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc5"
                >
                  <i className="bi bi-at text-primary me-3"></i> Console
                </button>
              </h2>
              <div
                id="acc5"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body text-muted">
                  Back-office reports and P&L statements.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 border shadow-sm">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-white text-dark py-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc6"
                >
                  <i className="bi bi-clock-history text-primary me-3"></i> Coin
                </button>
              </h2>
              <div
                id="acc6"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body text-muted">
                  Investing in direct Mutual Funds.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
