import React, { useState } from "react";

const CreateProducerAdminForm = (props) => {
  const onSubmit = () => {
    console.log("onSubmit called");
  };

  return (
    <div className="position-relative py-3">
      <div className="text-center">
        <h3>Add New Producer Admin</h3>
      </div>
      <div className="position-absolute top-0 end-0">
        <button
          className="btn btn-primary py-0 px-2"
          onClick={() => props.onCloseCreateProducerAdminForm()}
          title="Close"
        >
          X
        </button>
      </div>
      <form className="px-5 pt-3 mx-0">
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6">
            <label htmlFor="formCreateProducerAdminMembershipDate">
              Membership From Date
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerAdminMembershipDate"
              placeholder="2021-03-05"
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="formCreateProducerAdminRegNum">
              Registration Number
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerAdminRegNum"
              placeholder="TIN898979875765765"
            />
          </div>
        </div>
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProducerAdminName">Name</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerAdminName"
              placeholder="Name"
            />
          </div>
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProducerAdminEmail">Email</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerAdminEmail"
              placeholder="email"
            />
          </div>
        </div>
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProducerAdminPrimaryMobNum">
              Primary Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerAdminPrimaryMobNum"
              placeholder="primary mobile no"
            />
          </div>
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProducerAdminSecondMobNum">
              Secondary Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerAdminSecondMobNum"
              placeholder="secondary mobile no"
            />
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateProducerAdminAddress1">Address 1</label>
          <input
            type="text"
            className="form-control"
            id="formCreateProducerAdminAddress1"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateProducerAdminAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="formCreateProducerAdminAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="row g-3 mb-3">
          <div className="form-group col-sm-6">
            <label htmlFor="formCreateProducerAdminCity">City</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerAdminCity"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="formCreateProducerAdminState">State</label>
            <select id="formCreateProducerAdminState" className="form-control">
              <option defaultValue="Tamil Nadu">Tamil Nadu</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="formCreateProducerAdminPincode">Pincode</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProducerAdminPincode"
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

export default CreateProducerAdminForm;
