import React, { useState } from "react";

const CreateproductForm = (props) => {
  const onSubmit = () => {
    console.log("onSubmit called");
  };

  return (
    <div className="position-relative py-3">
      <div className="text-center">
        <h3>Add New product</h3>
      </div>
      <div className="position-absolute top-0 end-0">
        <button
          className="btn btn-primary py-0 px-2"
          onClick={() => props.onCloseCreateProductForm()}
          title="Close"
        >
          X
        </button>
      </div>
      <form className="px-5 pt-3 mx-0">
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6">
            <label htmlFor="formCreateproductName">Name</label>
            <input
              type="text"
              className="form-control"
              id="formCreateproductName"
              placeholder="product name"
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="formproductcode">Code</label>
            <input
              type="text"
              className="form-control"
              id="formCreateproductCode"
              placeholder="product code"
            />
          </div>
          <div className="form-group col-sm-10">
            <label htmlFor="formproductUnitOfMeasure">Unit Of Measure</label>
            <input
              type="text"
              className="form-control"
              id="formCreateproductUnitOfMeasure"
              placeholder="UnitOfMeasure"
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="formproductCGSTPercentPerUnit">
              CGST Percent PerUnit
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateproductCGSTPercentPerUnit"
              placeholder="CGSTPercentPerUnit"
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="formproductSGSTPercentPerUnit">
              SGST Percent PerUnit
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateproductSGSTPercentPerUnit"
              placeholder="SGSTPercentPerUnit"
            />
          </div>
          <div className="col-sm-4">
            <label htmlFor="formproductSection">Section</label>
            <select id="formSearchProductSearchBy" className="form-control">
              <option>Electronics</option>
              <option>Home Decor</option>
              <option>Health care</option>
              <option>Beauty products</option>
            </select>
          </div>
          <div className="col-sm-4">
            <label htmlFor="formproductCategory">Category</label>
            <select id="formSearchProductSearchBy" className="form-control">
              <option>Electronics</option>
              <option>Home Decor</option>
              <option>Health care</option>
              <option>Beauty products</option>
            </select>
          </div>
          <div className="col-sm-4">
            <label htmlFor="formproductSubCategory">Sub Category</label>
            <select id="formSearchProductSearchBy" className="form-control">
              <option>Electronics</option>
              <option>Home Decor</option>
              <option>Health care</option>
              <option>Beauty products</option>
            </select>
          </div>
        </div>

        <div className="mt-5 text-center">
          <button type="button" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateproductForm;
