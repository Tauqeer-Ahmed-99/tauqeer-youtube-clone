import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";

import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";

import { Route, Switch, Redirect } from "react-router-dom";

import "./_app.scss";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

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
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);

  return (
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
  );
};

export default App;
