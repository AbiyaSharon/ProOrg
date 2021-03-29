import React, { useState } from "react";
import ProducerAdminSearchForm from "./produceradminsearchform";
import CreateProducerAdminForm from "./createproduceradminform";
import ProducerAdminList from "./produceradminlist";

const ManageProducerAdmin = (props) => {
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
        Producer: "Producer A",
        LoginName: "Abiya",
        FirstName: "Hello",
        LastName: "Hello",
        PrimaryMobile: "9876543210",
        SecondaryMobile: "9876543210",
        Email: "qwerty@gmail.com",
      },
      {
        Producer: "Producer H",
        LoginName: "Hema",
        FirstName: "Hello",
        LastName: "Hello",
        PrimaryMobile: "9876543210",
        SecondaryMobile: "9876543210",
        Email: "qwerty@gmail.com",
      },
      {
        Producer: "Producer K",
        LoginName: "Kavya",
        FirstName: "Hello",
        LastName: "Hello",
        PrimaryMobile: "9876543210",
        SecondaryMobile: "9876543210",
        Email: "qwerty@gmail.com",
      },
    ],
    []
  );

  return (
    <div>
      <h1 className="text-center">
        Manage Producer Admin Details
      </h1>
      <div className="container border shadow rounded py-3 mt-5">
        {showCreateForm ? (
          <CreateProducerAdminForm
            onCloseCreateProducerAdminForm={onCloseCreateForm}
          />
        ) : (
          <div className="row">
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onCreate}
              >
                Add New Producer Admin
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="container border shadow rounded py-3 mt-5">
        <ProducerAdminSearchForm />
        <ProducerAdminList data={userList} />
      </div>
    </div>
  );
};

export default ManageProducerAdmin;
