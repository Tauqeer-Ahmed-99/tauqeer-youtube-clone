import React, { useState } from "react";

import { Container } from "react-bootstrap";

import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./_app.scss";

const Layout = ({ children }) => {
  const [sideBar, toggleSideBar] = useState(false);

  const handleToggleSideBar = () => {
    toggleSideBar((prevState) => !prevState);
  };
  return (
    <>
      <Header onToggleSideBar={handleToggleSideBar} />
      <div className="app__container">
        <SideBar
          onToggleSideBar={sideBar}
          handleToggleSideBar={handleToggleSideBar}
        />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>

        <Route path="/auth">
          <LoginScreen />
        </Route>

        <Route path="/search">
          <Layout>
            <h1>Search Results</h1>
          </Layout>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
