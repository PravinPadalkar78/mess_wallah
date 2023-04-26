import React from "react";
import { useRef } from "react";

import wood from "../components/imges/icon1.png";

const Modal = () => {
  // const content = useContext(funContext);
  // const {profiles} = content;
  const modalEle = useRef(null);
  const refClose = useRef(null);

  const update = () => {
    modalEle.current.click();
  };

  const handleOnClick = () => {
    refClose.current.click();
  };

  return (
    <div>
      <button
        ref={modalEle}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={update}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{
                background:
                  "rgb(238,174,202)",
                  background:
                  "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(196,180,217,1) 60%, rgba(148,187,233,1) 100%)",
              }}
            >
              
              <h5 className="modal-title" id="exampleModalLabel">
                Details :
              </h5>
              {/* <img src={wood} alt="mbkjbkjk" className="modal-title"/> */}

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={refClose}
              />
            </div>
            <div className="modal-body" style={{ backgroundColor: "#ffe8e8" }}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  <h5>Name</h5>
                </label>
                <img
                  src={wood}
                  alt=""
                  style={{ height: "25%", position: "absolute", right: "2%", top:"-1%" }}
                />
                <p>Jayesh Shinde</p>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  <h5>Address</h5>
                </label>
                <p>
                  XYZ,301-ABC Building, Near PQR Shop , Ulhasnagar-421103,
                  Thane, Maharashtra
                </p>
              </div>
              <div className="mb-3">
                <label htmlFor="tag" className="form-label">
                  <h5>Mobile No:</h5>
                </label>
                <p>99348238242</p>
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  <h5>Telephone</h5>
                </label>
                <p>0251-121324</p>
              </div>
              <hr />
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  <h5>Category</h5>
                </label>
                <p>Pure Veg</p>
              </div>
              <hr />
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  <h5>Menu</h5>
                </label>
                <p>Rajasthani Thali, Maharashtrian ThaliRamesh Messwala</p>
              </div>
              <hr />
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  <h5>Details</h5>
                </label>
                <p>
                  1. fixed time, 2. Everyday different menu, 3. 2 times a day
                  serving at doorstep 4. Monthly payment at a time 5. 1 month
                  advance necessary
                </p>
              </div>
              <hr />
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  <h5>Price</h5>
                </label>
                <p>Rs. 120</p>
              </div>
            </div>
            <div
              className="modal-footer"
              style={{ backgroundColor: "#ffe8e8" }}
            >
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleOnClick}
              >
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;