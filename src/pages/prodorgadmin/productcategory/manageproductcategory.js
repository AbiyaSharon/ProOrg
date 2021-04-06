import React, { useState } from "react";

const ManageProductCategory = () => {
  const onAdd = () => {
    console.log("onAdd called");
  };

  return (
    <form className="px-5 pt-3 mx-0">
      <div className="row g-2 mb-3">
        <div className="form-group col-sm-4">
          <label htmlFor="formproductSection">Section</label>
          <select id="formSearchProductSearchBy" className="form-control">
            <option>Electronics</option>
            <option>Home Decor</option>
            <option>Health care</option>
            <option>Beauty products</option>
          </select>
        </div>
        <div className="form-group col-sm-4">
          <label htmlFor="formCreateproductcategory">Section</label>
          <input
            type="text"
            className="form-control"
            id="formCreateproductcategory"
            placeholder="search"
          />
        </div>
        <div className="form-group col-sm-4">
          <button
            className="btn btn-primary py-0 px-2"
            type="button"
            className="btn btn-primary"
            onClick={onAdd}
          >
            Add
          </button>
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
        <div className="form-group col-sm-4">
          <label htmlFor="formCreateproductcategory">Category</label>
          <input
            type="text"
            className="form-control"
            id="formCreateproductcategory"
            placeholder="search"
          />
        </div>
        <div className="col-sm-4">
          <button
            className="btn btn-primary py-0 px-2"
            type="button"
            className="btn btn-primary"
            onClick={onAdd}
          >
            Add
          </button>
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
        <div className="form-group col-sm-4">
          <label htmlFor="formCreateproductcategory">Sub Category</label>
          <input
            type="text"
            className="form-control"
            id="formCreateproductcategory"
            placeholder="search"
          />
        </div>
        <div className="col-sm-4">
          <button
            className="btn btn-primary py-0 px-2"
            type="button"
            className="btn btn-primary"
            onClick={onAdd}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
export default ManageProductCategory;
