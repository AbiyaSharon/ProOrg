import React, { useState } from "react";

const CreateProdOrgAdminForm = (props) => {
  const onSubmit = () => {
    console.log("onSubmit called");
  };

  return (
    <div className="position-relative py-3">
      <div className="text-center">
        <h3>Add New Producer Organization Admin</h3>
      </div>
      <div className="position-absolute top-0 end-0">
        <button
          className="btn btn-primary py-0 px-2"
          onClick={() => props.onCloseCreateProdOrgAdminForm()}
          title="Close"
        >
          X
        </button>
      </div>
      <form className="px-5 pt-3 mx-0">
        <div className="row g-2 mb-3">
          <div className="form-group mb-3 col-sm-6">
            <label htmlFor="formCreateProdOrgAdminFirstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProdOrgAdminFirstName"
              placeholder="kavya"
            />
          </div>
          <div className="form-group mb-3 col-sm-6">
            <label htmlFor="formCreateProdOrgAdminLastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProdOrgAdminLastName"
              placeholder="Nagu"
            />
          </div>
        </div>
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProdOrgAdminPrimaryMobile">
              Primary Mobile
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateProdOrgAdminPrimaryMobile"
              placeholder="9876543210"
            />
          </div>
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProdOrgAdminSecondaryMobile">
              Secondary Mobile
            </label>
            <input
              type="text"
              className="form-control"
              id="formCreateProdOrgAdminSecondaryMobile"
              placeholder="9876543210"
            />
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formCreateProdOrgAdminEmail">Email</label>
          <input
            type="text"
            className="form-control"
            id="formCreateProdOrgAdminEmail"
            placeholder="email"
          />
        </div>
        <div className="row g-2 mb-3">
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProdOrgAdminLoginName">Login Name</label>
            <input
              type="text"
              className="form-control"
              id="formCreateProdOrgAdminLoginName"
              placeholder="Hema"
            />
          </div>
          <div className="form-group col-sm-6 mb-3">
            <label htmlFor="formCreateProdOrgAdminPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="formCreateProdOrgAdminPassword"
            />
          </div>
        </div>
        <div className="form-group col-sm-6 mb-3s">
          <label htmlFor="formCreateProdOrgAdminProdOrg">
            Producer Organization
          </label>
          <select id="formCreateProdOrgAdminProdOrg" className="form-control">
            <option>ProdOrg1</option>
            <option>ProdOrg2</option>
            <option>ProdOrg3</option>
          </select>
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

export default CreateProdOrgAdminForm;
