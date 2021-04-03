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

  const ProductList = React.useMemo(
    () => [
      {
        Name: "Aloe vera gel",
        Code: "1123A45Q",
        UnitOfMeasure: "12gm",
        CGSTPercentPerUnit: "9",
        SGSTPercentPerUnit: "9",
       },
       {
        Name: "Chocolate",
        Code: "1121A45W",
        UnitOfMeasure: "4gm",
        CGSTPercentPerUnit: "9",
        SGSTPercentPerUnit: "9",
       },
       {
        Name: "Soap",
        Code: "1223A45E",
        UnitOfMesure: "10gm",
        CGSTPercentPerUnit: "9",
        SGSTPercentPerUnit: "9",
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
        <ProductList data={Product} />
      </div>
    </div>
  );
};

export default ManageProduct;
