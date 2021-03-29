import React, { useState } from "react";
import ProducerSearchForm from "./producersearchform";
import CreateProducerForm from "./createproducerform";
import ProducerList from "./producerlist";

const manageproducer = (props) => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const onCreate = () => {
    console.log("onCreate called");
    setShowCreateForm(true);
  };

  const onCloseCreateForm = () => {
    console.log("onCloseCreateForm called");
    setShowCreateForm(false);
  };

  const producerList = React.useMemo(
    () => [
      {
        Name: "Producer A",
        RegistrationNumber: "201829",
        AddressLine1: "52, New colony",
        AddressLine2: "Near  subbaiah vidyalayam school",
        City: "Thoothukudi",
        Pincode: "628002",
        State: "Tamil Nadu",
      },
      {
        Name: "Producer K",
        RegistrationNumber: "201829",
        AddressLine1: "52, New colony",
        AddressLine2: "Near  subbaiah vidyalayam school",
        City: "Thoothukudi",
        Pincode: "628002",
        State: "Tamil Nadu",
      },
      {
        Name: "Producer H",
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
      <h1 className="text-center">Manage Producer Details</h1>
      <div className="container border shadow rounded py-3 mt-5">
        {showCreateForm ? (
          <CreateProducerForm
            onCloseCreateProducerForm={onCloseCreateForm}
          />
        ) : (
          <div className="row">
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onCreate}
              >
                Add New Producer
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="container border shadow rounded py-3 mt-5">
        <ProducerSearchForm />
        <ProducerList data={producerList} />
      </div>
    </div>
  );
};

export default manageproducer;
