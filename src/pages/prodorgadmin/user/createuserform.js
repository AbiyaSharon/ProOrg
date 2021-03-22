import React, { useState } from "react";

const CreateUserForm = (props) => {
  const onSubmit = () => {
    console.log("onSubmit called");
  };

  return (
    <div className="position-relative py-3">
      <div className="text-center">
        <h3>Add New User</h3>
      </div>
      <div className="position-absolute top-0 end-0">
        <button
          className="btn btn-primary py-0 px-2"
          onClick={() => props.onCloseCreateUserForm()}
          title="Close"
        >
          X
        </button>
      </div>
      <form className="px-5 pt-3 mx-0">
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6">
            <label htmlFor="formCreateUserMembershipDate">
              Membership From Date
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateUserMembershipDate"
              placeholder="2021-03-05"
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="formCreateUserRegNum">
              Registration Number
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateUserRegNum"
              placeholder="TIN898979875765765"
            />
          </div>
        </div>
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateUserName">Name</label>
            <input
              type="text"
              className="form-control"
              id="formCreateUserName"
              placeholder="Name"
            />
          </div>
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateUserEmail">Email</label>
            <input
              type="text"
              className="form-control"
              id="formCreateUserEmail"
              placeholder="email"
            />
          </div>
        </div>
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateUserPrimaryMobNum">
              Primary Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateUserPrimaryMobNum"
              placeholder="primary mobile no"
            />
          </div>
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateUserSecondMobNum">
              Secondary Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateUserSecondMobNum"
              placeholder="secondary mobile no"
            />
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateUserAddress1">Address 1</label>
          <input
            type="text"
            className="form-control"
            id="formCreateUserAddress1"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateUserAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="formCreateUserAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="row g-3 mb-3">
          <div className="form-group col-sm-6">
            <label htmlFor="formCreateUserCity">City</label>
            <input
              type="text"
              className="form-control"
              id="formCreateUserCity"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="formCreateUserState">State</label>
            <select id="formCreateUserState" className="form-control">
              <option defaultValue="Tamil Nadu">Tamil Nadu</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="formCreateUserPincode">Pincode</label>
            <input
              type="text"
              className="form-control"
              id="formCreateUserPincode"
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

export default CreateUserForm;
