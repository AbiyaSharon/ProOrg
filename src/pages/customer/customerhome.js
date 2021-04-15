import React, { useState } from "react";
import Layout from "../../components/Layout";
import Login from "../../components/Login";

const CustomerHome = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const onLogin = (userName, password) => {
    //call server api to authenticate by passing userName,password
    console.log("onLogin called");
    setLoggedIn(true);
  };
  return (
    <Layout showBackground="true">
      {loggedIn ? (
        <div className="container"><p>sign in clicked</p></div>
      ) : (
      <div className="container">
        <div className="row">
          <div className="col-sm-8"></div>
          <div className="col-sm-4">
            <Login onLogin={onLogin}/>                      
          </div>
        </div>
      </div>
      )};
    </Layout>
  );
};
  
export default CustomerHome;
