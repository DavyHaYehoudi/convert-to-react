import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreateEmployer from "./pages/create-employee/CreateEmployer";
import EmployeeList from "./pages/list-employees/EmployeeList";
import NotFound from "./pages/NotFound";
import Navigation from "./layout/Navigation";

function App() {
  return (
    <>
      {/* Define the routes */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-employer" element={<CreateEmployer />} />
        <Route path="/employees" element={<EmployeeList />} />
        {/* Catch-all route for 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
