import React from "react";
import "./updateread.css";

const Updateread = () => {
  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Product Image:
            </label>
            <input
              className="form-control"
              type="file"
              name="image"
              id="formFile"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Product Name:
            </label>
            <input className="form-control" type="text" name="pname" />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Product Quantity:
            </label>
            <input className="form-control" type="number" name="pquantity" />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Product Rate:
            </label>
            <input className="form-control" type="number" name="prate" />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Product Description:
            </label>
            <input className="form-control" type="text" name="pdescription" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Updateread;
