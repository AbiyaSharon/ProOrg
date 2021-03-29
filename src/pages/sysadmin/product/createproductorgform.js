import React, { useState } from "react";

const CreateProductForm = (props) => {
  const onSubmit = () => {
    console.log("onSubmit called");
  };

  return (
    <div className="position-relative py-3">
      <div className="text-center">
        <h3>Add New Product</h3>
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
        <div className="form-group mb-3">
          <label htmlFor="formCreateProductRegNum">
            Registration Number
          </label>
          <input
            type="text"
            className="form-control"
            id="formCreateProductRegNum"
            placeholder="TIN898979875765765"
          />
        </div>
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProductName">Name</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProductName"
              placeholder="Name"
            />
          </div>
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProductEmail">Email</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProductEmail"
              placeholder="email"
            />
          </div>
        </div>
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProductPrimaryMobNum">
              Primary Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateProductPrimaryMobNum"
              placeholder="primary mobile no"
            />
          </div>
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProductSecondMobNum">
              Secondary Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateProductSecondMobNum"
              placeholder="secondary mobile no"
            />
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateProductAddress1">Address 1</label>
          <input
            type="text"
            className="form-control"
            id="formCreateProductAddress1"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateProductAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="formCreateProductAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="row g-3 mb-3">
          <div className="form-group col-sm-6">
            <label htmlFor="formCreateProductCity">City</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProductCity"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="formCreateProductState">State</label>
            <select id="formCreateProductState" className="form-control">
              <option defaultValue="Tamil Nadu">Tamil Nadu</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="formCreateProductPincode">Pincode</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProductPincode"
            />
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

export default CreateProductForm;
