import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Committees from "./pages/Committees";
import DepartmentDetails from "./pages/DepartmentDetails";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Departments />} />
          <Route
            path="/departments/:departmentId/"
            element={<DepartmentDetails />}
          />
          <Route
            path="/departments/:departmentId/committees/:committeeId/"
            element={<Committees />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
