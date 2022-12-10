import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeaderWithBtn from "./components/HeaderWithBtn/HeaderWithBtn";
import Main from "./components/Main/Main";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import SalePage from "./components/SalePage/SalePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/ino/:inoId"
          element={
            <>
              <Header />
              <ProjectPage />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/ino/:inoId/sale"
          element={
            <>
              <HeaderWithBtn />
              <SalePage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
