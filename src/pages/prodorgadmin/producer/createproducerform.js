import React, { useState } from "react";

const CreateProducerForm = (props) => {
  const onSubmit = () => {
    console.log("onSubmit called");
  };

  return (
    <div className="position-relative py-3">
      <div className="text-center">
        <h3>Add New Producer</h3>
      </div>
      <div className="position-absolute top-0 end-0">
        <button
          className="btn btn-primary py-0 px-2"
          onClick={() => props.onCloseCreateProducerForm()}
          title="Close"
        >
          X
        </button>
      </div>
      <form className="px-5 pt-3 mx-0">
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6">
            <label htmlFor="formCreateProducerMembershipDate">
              Membership From Date
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerMembershipDate"
              placeholder="2021-03-05"
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="formCreateProducerRegNum">
              Registration Number
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerRegNum"
              placeholder="TIN898979875765765"
            />
          </div>
        </div>
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProducerName">Name</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerName"
              placeholder="Name"
            />
          </div>
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProducerEmail">Email</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerEmail"
              placeholder="email"
            />
          </div>
        </div>
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProducerPrimaryMobNum">
              Primary Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerPrimaryMobNum"
              placeholder="primary mobile no"
            />
          </div>
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProducerSecondMobNum">
              Secondary Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerSecondMobNum"
              placeholder="secondary mobile no"
            />
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateProducerAddress1">Address 1</label>
          <input
            type="text"
            className="form-control"
            id="formCreateProducerAddress1"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateProducerAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="formCreateProducerAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="row g-3 mb-3">
          <div className="form-group col-sm-6">
            <label htmlFor="formCreateProducerCity">City</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerCity"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="formCreateProducerState">State</label>
            <select id="formCreateProducerState" className="form-control">
              <option defaultValue="Tamil Nadu">Tamil Nadu</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="formCreateProducerPincode">Pincode</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerPincode"
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

export default CreateProducerForm;
