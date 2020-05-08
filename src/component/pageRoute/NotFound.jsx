import React from "react";

const PageNotFound = () => {
  return (
    <section className="welcome-404 sec-padding pb-150px text-center p-relative o-hidden bg-gray">
      <div className="container">
        <div className="row welcome-text sec-padding flex-center">
          <div className="col-md-12 mb-20px z-index-1">
            <h1 className="color-blue">404 Error</h1>
          </div>
          <div className="col-md-7 text-center">
            <img
              alt="img"
              src="images/404.png"
              className="ml-auto mr-auto mb-10px"
            />
            <h4>Sorry we can't find that page</h4>
            <p className="mb-30px">
              The page you are looking for was moved, removed, renamed or might
              never existed.
            </p>
            <form>
              <input
                type="text"
                className="d-block w-100 mb-20px input-field pt-10px pb-10px pr-10px pl-10px radius-5px"
                required
              />
              <input type="submit" value="search" className="main-btn btn-3" />
            </form>
          </div>
        </div>
      </div>
      <div className="pattern p-absolute"></div>
    </section>
  );
};

export default PageNotFound;
