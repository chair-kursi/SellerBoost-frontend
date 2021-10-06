import React, { useEffect, useState } from "react";

import "./App.css";

import Home from "./components/common/Home";
import { BrowserRouter, Route } from "react-router-dom";
import AddStyle from "./components/services/AddStyle";
import AddSkus from "./components/services/AddSkus";
import EditStyle from "./components/services/EditStyle";
import AddSize from "./components/services/AddSize";
// import Sidebar from "./components/common/Sidebar";
import Dashboard from "./components/services/Dashboard";
import Modal from "react-modal";
import Onboarding from "./components/common/Onboarding";
import MarketPlaceHealth from "./components/services/MarketPlaceHealth";
import OneClickCatlogUpdate from "./components/services/OneClickCatlogUpdate";
import MarketPlaceReconciliation from "./components/services/MarketPlaceReconciliation";
import Merchandising from "./components/services/Merchandising";
import { Auth, onAuthStateChanged } from "./components/auth/firebase";
import Login from "./components/auth/Login";
import { Redirect } from "react-router";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    height: "600px",
    width: "1100px",
    transform: "translate(-50%, -50%)",
  },
};

function App() {

  const [auth, setAuth] = useState(-1);

  useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
      if (user)
        setAuth(true);
      else setAuth(false);
    });

  }, []);

  if (auth === -1)
    return (
      <h1>Checking Auth</h1>
    )

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/style/add">
          {
            (
              !auth ? <Redirect to="/suprLogin" /> :
                <Modal isOpen="true" style={customStyles}>
                  <AddStyle />
                </Modal>
            )
          }

        </Route>
        <Route exact path="/style/edit/:styleCode">
          {
            (
              !auth ? <Redirect to="/suprLogin" /> :
                <Modal isOpen="true" style={customStyles}>
                  <EditStyle />
                </Modal>
            )
          }

        </Route>
        <Route exact path="/sku/add/skuCode">
          {
            (
              !auth ? <Redirect to="/suprLogin" /> :
                <Modal isOpen="true" style={customStyles}>
                  <AddSkus />
                </Modal>
            )
          }

        </Route>

        <Route exact path="/size/add">
          {
            (
              !auth ? <Redirect to="/suprLogin" /> :
                <Modal isOpen="true" style={customStyles}>
                  <AddSize />
                </Modal>
            )
          }
        </Route>

        <Route exact path="/MarketPlaceReconciliation">
          {
            (
              !auth ? <Redirect to="/suprLogin" /> :
                <MarketPlaceReconciliation />
            )
          }
        </Route>

        <Route exact path="/Merchandising">
          {
            (
              !auth ? <Redirect to="/suprLogin" /> :
                <Merchandising />
            )
          }
        </Route>

        <Route exact path="/Dashboard">
          {
            (
              !auth ? <Redirect to="/suprLogin" /> :
                <Dashboard />
            )
          }
        </Route>

        <Route exact path="/Onboarding">
          {
            (
              !auth ? <Redirect to="/suprLogin" /> :
                <Onboarding />
            )
          }
        </Route>

        <Route exact path="/MarketPlaceHealth">
          {
            (
              !auth ? <Redirect to="/suprLogin" /> :

                <MarketPlaceHealth />
            )
          }
        </Route>
        <Route exact path="/OneClickCatlogUpdate">
          {
            (
              !auth ? <Redirect to="/suprLogin" /> :
                <OneClickCatlogUpdate />
            )
          }
        </Route>
        <Route exact path="/suprLogin">
          {
            (
              auth ? <Redirect to="/" /> :
                <Login />
            )
          }
        </Route>
        <Route exact path="/">
          {
            (
              !auth ? <Redirect to="/suprLogin" /> :
                <Home />
            )
          }
          {/* <div className="sidebar">
            <Sidebar />
          </div> */}
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
