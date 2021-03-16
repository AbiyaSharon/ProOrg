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
          onClick={() => props.onCloseCreateproductForm()}
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
            <label htmlFor="formCreateproductMemNum">
              Membership Number
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateproductMemNum"
              placeholder="TIN898979875765765"
            />
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateproductMemberFromDate">Member from Date</label>
          <input
            type="date"
            className="form-control"
            id="formCreateproductMemberFromDate"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateproductAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="formCreateproductAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="row g-3 mb-3">
          <div className="form-group col-sm-6">
            <label htmlFor="formCreateproductCity">City</label>
            <input
              type="text"
              className="form-control"
              id="formCreateproductCity"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="formCreateproductState">State</label>
            <select id="formCreateproductState" className="form-control">
              <option defaultValue="Tamil Nadu">Tamil Nadu</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="formCreateproductPincode">Pincode</label>
            <input
              type="text"
              className="form-control"
              id="formCreateproductPincode"
            />
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateproductFirstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="formCreateproductFirstName"
            placeholder="first name"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateproductLastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="formCreateproductLastName"
            placeholder="last name"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateproductPrimaryMobNum">Primary Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="formCreateproductPrimaryMobNum"
            placeholder="primary mobile no"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateproductSecondMobNum">Secondary Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="formCreateproductSecondMobNum"
            placeholder="secondary mobile no"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateproductEmail">Email</label>
          <input
            type="text"
            className="form-control"
            id="formCreateproductEmail"
            placeholder="email"
          />
        </div>
        <div className="form-group col-sm-6">
            <label htmlFor="formCreateproductLoginName">Login Name</label>
            <input
              type="text"
              className="form-control"
              id="formCreateproductLoginName"
              placeholder="name"
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="formCreateproductPassword">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateproductPassword"
              placeholder="password"
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="formCreateproductRe_type_Password">
              Re_type Password
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateproductRe_type_Password"
              placeholder="re_type password"
            />
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
