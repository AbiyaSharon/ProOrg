import React, { useState } from "react";
import ProductSearchForm from "./Productsearchform";
import CreateProductForm from "./createProductform";
import ProductList from "./Productlist";

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

  const ProductList = React.useMemo(
    () => [
      {
        Product: "Name",
       },
       {
        Product: "Code",
       },
       
      ],
    []
    
  );

  return (
    <div>
      <h1 className="text-center">
        Manage Product
      </h1>
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
                Add New product
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="container border shadow rounded py-3 mt-5">
        <ProductSearchForm />
        <ProductList data={userList} />
      </div>
    </div>
  );
};

export default ManageProduct;
