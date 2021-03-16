import React, { useState } from "react";
import UserSearchForm from "./usersearchform";
import CreateUserForm from "./createuserform";
import UserList from "./userlist";

const ManageUser = (props) => {
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
      <h1 className="text-center">Manage User Details</h1>
      <div className="container border shadow rounded py-3 mt-5">
        {showCreateForm ? (
          <CreateUserForm onCloseCreateUserForm={onCloseCreateForm} />
        ) : (
          <div className="row">
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onCreate}
              >
                Add New User
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="container border shadow rounded py-3 mt-5">
        <UserSearchForm />
        <UserList data={userList} />
      </div>
    </div>
  );
};

export default ManageUser;
