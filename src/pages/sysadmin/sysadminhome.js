import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Login from "../../components/Login";
import ManageProducerOrg from "./producerorg/manageproducerorg";
import ManageProdOrgAdmin from "./prodorgadmin/manageprodorgadmin";
import ManageProduct from  "./product/manageProduct";

const SysAdminHome = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeItem, setActiveItem] = useState("Producer Organizations");

  const onLogin = (userName, password) => {
    // call server api to authenticate by sending userName, password
    console.log("onLogin called");
    setLoggedIn(true);
  };

  const onClickProducerOrganizations = () => {
    setActiveItem("Producer Organizations");
  };

  const onClickProdOrgAdmins = () => {
    setActiveItem("Producer Organization Admins");
  };

  const sidebar = [
    {
      label: "Producer Organizations",
      handler: onClickProducerOrganizations,
    },
    {
      label: "Producer Organization Admins",
      handler: onClickProdOrgAdmins,
    },
  ];

  return (
    <Layout sidebar={loggedIn ? sidebar : null} activeItem={activeItem}>
      {loggedIn ? (
        <>
          {activeItem === "Producer Organizations" ? (
            <ManageProducerOrg />
          ) : null}
          {activeItem === "Producer Organization Admins" ? <ManageProdOrgAdmin /> : null}
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
