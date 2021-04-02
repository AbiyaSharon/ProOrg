import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Login from "../../components/Login";
import ManageProducer from "./producer/manageproducer";
import ManageProducerAdmin from "./produceradmin/manageproduceradmin";
import ManageProduct from "./product/manageproduct";

const ProdOrgAdminHome = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeItem, setActiveItem] = useState("Producers");

  const onLogin = (userName, password) => {
    // call server api to authenticate by sending userName, password
    console.log("onLogin called");
    setLoggedIn(true);
  };

  const onClickProducers = () => {
    setActiveItem("Producers");
  };

  const onClickProducerAdmins = () => {
    setActiveItem("Producer Admins");
  };

  const sidebar = [
    {
      label: "Producers",
      handler: onClickProducers,
    },
    {
      label: "Producer Admins",
      handler: onClickProducerAdmins,
    },
    {
      label: "Product",
      handler: onClickProduct,
    },
  ];

  return (
    <Layout sidebar={loggedIn ? sidebar : null} activeItem={activeItem}>
      {loggedIn ? (
        <>
          {activeItem === "Producers" ? <ManageProducer /> : null}
          {activeItem === "Producer Admins" ? <ManageProducerAdmin /> : null}
          {activeItem === "Product" ? <ManageProduct /> : null}
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
export default ProdOrgAdminHome;

