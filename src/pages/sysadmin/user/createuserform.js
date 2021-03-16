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
          <div className="form-group mb-3 col-sm-6">
            <label htmlFor="formCreateUserFirstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="formCreateUserFirstName"
              placeholder="kavya"
            />
          </div>
          <div className="form-group mb-3 col-sm-6">
            <label htmlFor="formCreateUserLastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="formCreateUserLastName"
              placeholder="Nagu"
            />
          </div>
        </div>
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateUserPrimaryMobile">Primary Mobile</label>
            <input
              type="text"
              className="form-control"
              id="formCreateUserPrimaryMobile"
              placeholder="9876543210"
            />
          </div>
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateUserSecondaryMobile">
              Secondary Mobile
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateUserSecondaryMobile"
              placeholder="9876543210"
            />
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateUserEmail">Email</label>
          <input
            type="text"
            className="form-control"
            id="formCreateUserEmail"
            placeholder="email"
          />
        </div>
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateUserLoginName">Login Name</label>
            <input
              type="text"
              className="form-control"
              id="formCreateUserLoginName"
              placeholder="Hema"
            />
          </div>
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateUserPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="formCreateUserPassword"
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
