import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Login from "../../components/Login";
import ProducerSearchForm from "./producer/producersearchform";
import CreateProducerForm from "./producer/createproducerform";
import ProducerList from "./producer/producerlist";

const ProdOrgAdminHome = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const onLogin = (userName, password) => {
    // call server api to authenticate by sending userName, password
    console.log("onLogin called");
    setLoggedIn(true);
  };

  const onCreate = () => {
    console.log("onCreate called");
    setShowCreateForm(true);
  };

  const onCloseCreateForm = () => {
    console.log("onCloseCreateForm called");
    setShowCreateForm(false);
  };

  const prodList = React.useMemo(
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
    <Layout>
      <h1 className="text-center">Manage Producer Details</h1>
      {loggedIn ? (
        <div>
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
              <ProducerList data={prodList} />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-sm-8"></div>
            <div className="col-sm-4">
              <Login onLogin={onLogin} />
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .container {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
      `}</style>
    </Layout>
  );
};
export default ProdOrgAdminHome;
