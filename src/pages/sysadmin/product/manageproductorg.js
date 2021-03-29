import React, { useState } from "react";
import ProductSearchForm from "./productsearchform";
import CreateProductForm from "./createProductform";
import ProductList from "./productlist";

const ManageProduct = (props) => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const onCreate = () => {
    console.log("onCreate called");
    setShowCreateForm(true);
  };

  const onCloseCreateForm = () => {
    console.log("onCloseCreateForm called");
    setShowCreateForm(false);
  };

  const orgList = React.useMemo(
    () => [
      {
        Name: "Holy cross",
        RegistrationNumber: "201829",
        AddressLine1: "52, New colony",
        AddressLine2: "Near  subbaiah vidyalayam school",
        City: "Thoothukudi",
        Pincode: "628002",
        State: "Tamil Nadu",
      },
    ],
    []
  );

  return (
    <div>
      <h1 className="text-center">Manage Producer Organization Details</h1>
      <div className="container border shadow rounded py-3 mt-5">
        {showCreateForm ? (
          <CreateProductForm
            onCloseCreateProductForm={onCloseCreateForm}
          />
        ) : (
          <div className="row">
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onCreate}
              >
                Add New Producer Organization
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="container border shadow rounded py-3 mt-5">
        <ProductSearchForm />
        <ProductList data={orgList} />
      </div>
    </div>
  );
};

export default ManageProduct;
