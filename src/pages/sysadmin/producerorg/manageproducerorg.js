import React, { useState } from "react";
import ProducerOrgSearchForm from "./producerorgsearchform";
import CreateProducerOrgForm from "./createproducerorgform";
import ProducerOrgList from "./producerorglist";

const ManageProducerOrg = (props) => {
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
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
        State: "Tamil Nadu",
      },
      {
        Name: "Hello",
        RegistrationNumber: "RegNum",
        AddressLine1: "Address1",
        AddressLine2: "Address2",
        City: "City",
        Pincode: "121221121",
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
          <CreateProducerOrgForm
            onCloseCreateProducerOrgForm={onCloseCreateForm}
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
        <ProducerOrgSearchForm />
        <ProducerOrgList data={orgList} />
      </div>
    </div>
  );
};

export default ManageProducerOrg;
