import React, { useState } from "react";
import ProdOrgAdminSearchForm from "./prodorgadminsearchform";
import CreateProdOrgAdminForm from "./createprodorgadminform";
import ProdOrgAdminList from "./prodorgadminlist";

const ManageProdOrgAdmin = (props) => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const onCreate = () => {
    console.log("onCreate called");
    setShowCreateForm(true);
  };

  const onCloseCreateForm = () => {
    console.log("onCloseCreateForm called");
    setShowCreateForm(false);
  };

  const userList = React.useMemo(
    () => [
      {
        FirstName: "Hello",
        LastName: "Hello",
        PrimaryMobile: "9876543210",
        SecondaryMobile: "9876543210",
        Email: "qwerty@gmail.com",
        LoginName: "Hema",
      },
      {
        FirstName: "Hello",
        LastName: "Hello",
        PrimaryMobile: "9876543210",
        SecondaryMobile: "9876543210",
        Email: "qwerty@gmail.com",
        LoginName: "Hema",
      },
      {
        FirstName: "Hello",
        LastName: "Hello",
        PrimaryMobile: "9876543210",
        SecondaryMobile: "9876543210",
        Email: "qwerty@gmail.com",
        LoginName: "Hema",
      },
      {
        FirstName: "Hello",
        LastName: "Hello",
        PrimaryMobile: "9876543210",
        SecondaryMobile: "9876543210",
        Email: "qwerty@gmail.com",
        LoginName: "Hema",
      },
      {
        FirstName: "Hello",
        LastName: "Hello",
        PrimaryMobile: "9876543210",
        SecondaryMobile: "9876543210",
        Email: "qwerty@gmail.com",
        LoginName: "Hema",
      },
      {
        FirstName: "Hello",
        LastName: "Hello",
        PrimaryMobile: "9876543210",
        SecondaryMobile: "9876543210",
        Email: "qwerty@gmail.com",
        LoginName: "Hema",
      },
      {
        FirstName: "Hello",
        LastName: "Hello",
        PrimaryMobile: "9876543210",
        SecondaryMobile: "9876543210",
        Email: "qwerty@gmail.com",
        LoginName: "Hema",
      },
      {
        FirstName: "Hello",
        LastName: "Hello",
        PrimaryMobile: "9876543210",
        SecondaryMobile: "9876543210",
        Email: "qwerty@gmail.com",
        LoginName: "Hema",
      },
      {
        FirstName: "Hello",
        LastName: "Hello",
        PrimaryMobile: "9876543210",
        SecondaryMobile: "9876543210",
        Email: "qwerty@gmail.com",
        LoginName: "Hema",
      },
      {
        FirstName: "Hello",
        LastName: "Hello",
        PrimaryMobile: "9876543210",
        SecondaryMobile: "9876543210",
        Email: "qwerty@gmail.com",
        LoginName: "Hema",
      },
      {
        FirstName: "Hello",
        LastName: "Hello",
        PrimaryMobile: "9876543210",
        SecondaryMobile: "9876543210",
        Email: "qwerty@gmail.com",
        LoginName: "Hema",
      },
      {
        FirstName: "Hello",
        LastName: "Hello",
        PrimaryMobile: "9876543210",
        SecondaryMobile: "9876543210",
        Email: "qwerty@gmail.com",
        LoginName: "Hema",
      },
    ],
    []
  );

  return (
    <div>
      <h1 className="text-center">Manage Producer Organization Admin  Details</h1>
      <div className="container border shadow rounded py-3 mt-5">
        {showCreateForm ? (
          <CreateProdOrgAdminForm onCloseCreateProdOrgAdminForm={onCloseCreateForm} />
        ) : (
          <div className="row">
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onCreate}
              >
                Add New ProdOrgAdmin
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="container border shadow rounded py-3 mt-5">
        <ProdOrgAdminSearchForm />
        <ProdOrgAdminList data={userList} />
      </div>
    </div>
  );
};

export default ManageProdOrgAdmin;
