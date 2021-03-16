import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Login from "../../components/Login";
import ManageProducerOrg from "./producerorg/manageproducerorg";
import ManageUser from "./user/manageuser";

const SysAdminHome = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const onLogin = (userName, password) => {
    // call server api to authenticate by sending userName, password
    console.log("onLogin called");
    setLoggedIn(true);
  };

  return (
    <Layout>
      {loggedIn ? (
        <>
          <ManageProducerOrg></ManageProducerOrg>
          <ManageUser></ManageUser>
        </>
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
export default SysAdminHome;
