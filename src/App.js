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
import Home1 from "./components/common/LandingPage/Pages";
import Merchandising from "./components/services/Merchandising";
import { Auth, onAuthStateChanged } from "./components/auth/firebase";
// import Login from "./components/auth/Login";
import { Redirect } from "react-router";
import SigninPage from "./components/common/LandingPage/Pages/signin";
import BusinessHealth from "./components/services/BusinessHealth";
import DispatchHealth from "./components/services/DispatchHealth";

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
      if (user) setAuth(true);
      else setAuth(false);
    });
  }, []);

  if (auth === -1) return <h1>Checking Auth</h1>;

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/style/add">
          {!auth ? (
            <Redirect to="/signin" />
          ) : (
            <Modal isOpen="true" style={customStyles}>
              <AddStyle />
            </Modal>
          )}
        </Route>
        <Route exact path="/style/edit/:styleCode">
          {!auth ? (
            <Redirect to="/signin" />
          ) : (
            <Modal isOpen="true" style={customStyles}>
              <EditStyle />
            </Modal>
          )}
        </Route>
        <Route exact path="/sku/add/skuCode">
          {!auth ? (
            <Redirect to="/signin" />
          ) : (
            <Modal isOpen="true" style={customStyles}>
              <AddSkus />
            </Modal>
          )}
        </Route>

        <Route exact path="/size/add">
          {!auth ? (
            <Redirect to="/signin" />
          ) : (
            <Modal isOpen="true" style={customStyles}>
              <AddSize />
            </Modal>
          )}
        </Route>

        <Route exact path="/MarketPlaceReconciliation">
          {!auth ? <Redirect to="/signin" /> : <MarketPlaceReconciliation />}
        </Route>

        <Route exact path="/Merchandising">
          {!auth ? <Redirect to="/signin" /> : <Merchandising />}
        </Route>

        <Route exact path="/Dashboard">
          {!auth ? <Redirect to="/signin" /> : <Dashboard />}
        </Route>

        <Route exact path="/Onboarding">
          {!auth ? <Redirect to="/signin" /> : <Onboarding />}
        </Route>

        <Route exact path="/MarketPlaceHealth">
          {!auth ? <Redirect to="/signin" /> : <MarketPlaceHealth />}
        </Route>
        <Route exact path="/OneClickCatlogUpdate">
          {!auth ? <Redirect to="/signin" /> : <OneClickCatlogUpdate />}
        </Route>

        <Route exact path="/BusinessHealth">
          {!auth ? <Redirect to="/signin" /> : <BusinessHealth />}
        </Route>

        <Route exact path="/DispatchHealth">
          {!auth ? <Redirect to="/signin" /> : <DispatchHealth />}
        </Route>

        {/* <Route exact path="/suprLogin">
          {auth ? <Redirect to="/" /> : <Login />}
        </Route> */}
        <Route exact path="/Home">
          {!auth ? <Redirect to="/signin" /> : <Home />}
        </Route>
        <Route exact path="/">
          <Home1 />

          {/* {
            (
              !auth ? <Redirect to="/suprLogin" /> :
                <Home />
            )
          } */}
        </Route>

        <Route exact path="/signin">
          <SigninPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
