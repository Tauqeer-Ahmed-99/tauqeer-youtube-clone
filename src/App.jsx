import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import HomeScreen from "./screens/homeScreen/HomeScreen";

import "./_app.scss";

function App() {
  return (
    <>
      <Header />
      <div className="app__container">
        <SideBar />
        <Container fluid className="app__main border border-info">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
