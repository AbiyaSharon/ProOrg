import React, { useState } from "react";

const CreateProducerOrgForm = (props) => {
  const onSubmit = () => {
    console.log("onSubmit called");
  };

  return (
    <div className="position-relative py-3">
      <div className="text-center">
        <h3>Add New Producer Organisation</h3>
      </div>
      <div className="position-absolute top-0 end-0">
        <button
          className="btn btn-primary py-0 px-2"
          onClick={() => props.onCloseCreateProducerOrgForm()}
          title="Close"
        >
          X
        </button>
      </div>
      <form className="px-5 pt-3 mx-0">
        <div className="form-group mb-3">
          <label htmlFor="formCreateProducerOrgRegNum">
            Registration Number
          </label>
          <input
            type="text"
            className="form-control"
            id="formCreateProducerOrgRegNum"
            placeholder="TIN898979875765765"
          />
        </div>
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProducerOrgName">Name</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerOrgName"
              placeholder="Name"
            />
          </div>
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProducerOrgEmail">Email</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerOrgEmail"
              placeholder="email"
            />
          </div>
        </div>
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProducerOrgPrimaryMobNum">
              Primary Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerOrgPrimaryMobNum"
              placeholder="primary mobile no"
            />
          </div>
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProducerOrgSecondMobNum">
              Secondary Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerOrgSecondMobNum"
              placeholder="secondary mobile no"
            />
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateProducerOrgAddress1">Address 1</label>
          <input
            type="text"
            className="form-control"
            id="formCreateProducerOrgAddress1"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateProducerOrgAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="formCreateProducerOrgAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="row g-3 mb-3">
          <div className="form-group col-sm-6">
            <label htmlFor="formCreateProducerOrgCity">City</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerOrgCity"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="formCreateProducerOrgState">State</label>
            <select id="formCreateProducerOrgState" className="form-control">
              <option defaultValue="Tamil Nadu">Tamil Nadu</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="formCreateProducerOrgPincode">Pincode</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerOrgPincode"
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

export default CreateProducerOrgForm;
