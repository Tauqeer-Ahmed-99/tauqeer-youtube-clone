import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";

import "./_app.scss";

function App() {
  // const [sideBar, toggleSideBar] = useState(false);

  // const handleToggleSideBar = () => {
  //   toggleSideBar((prevState) => !prevState);
  // };

  return (
    // <>
    //   <Header onToggleSideBar={handleToggleSideBar} />
    //   <div className="app__container">
    //     <SideBar
    //       onToggleSideBar={sideBar}
    //       handleToggleSideBar={handleToggleSideBar}
    //     />
    //     <Container fluid className="app__main">
    //       <HomeScreen />
    //     </Container>
    //   </div>
    // </>
    <LoginScreen />
  );
}

export default App;
