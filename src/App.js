import React, { useState } from "react";

import "./App.css";

import Home from "./components/common/Home";
import { BrowserRouter, Route } from "react-router-dom";
import AddStyle from "./components/services/AddStyle";
import AddSkus from "./components/services/AddSkus";
import EditStyle from "./components/services/EditStyle";
import AddSize from "./components/services/AddSize";
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./components/services/Dashboard";
import Modal from "react-modal";
import Onboarding from "./components/common/Onboarding";
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
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/style/add">
          <Modal isOpen="true" style={customStyles}>
            <AddStyle />
          </Modal>
        </Route>
        <Route exact path="/style/edit/:styleCode">
          <Modal isOpen="true" style={customStyles}>
            <EditStyle />
          </Modal>
        </Route>
        <Route exact path="/sku/add/skuCode">
          <Modal isOpen="true" style={customStyles}>
            <AddSkus />
          </Modal>
        </Route>

        <Route exact path="/size/add">
          <Modal isOpen="true" style={customStyles}>
            <AddSize />
          </Modal>
        </Route>

        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/Onboarding">
          <Onboarding />
        </Route>

        <Route exact path="/">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="home">
            <Home />
          </div>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
