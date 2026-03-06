const RightSection = ({ imgURL, prdtName, prdtDescription, tryDemo }) => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-6 p-5 mt-5">
          <h1 className="text-info-emphasis fs-3 my-4">{prdtName}</h1>
          <p className="text-muted fs-5 w-60 my-4 ">{prdtDescription}</p>
          <a
            className="link-opacity-100 "
            style={{ textDecoration: "None", marginRight: "2.5rem" }}
            href="#"
          >
            {tryDemo}
            <i className="fa-solid fa-arrow-right mr-3"></i>
          </a>
        </div>
        <div className="col-6 mt-5">
          <img src={imgURL} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
